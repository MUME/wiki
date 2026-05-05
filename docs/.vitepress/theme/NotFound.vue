<template>
  <div class="not-found">
    <div class="not-found-inner">
      <div class="not-found-icon">⚔</div>
      <h1 class="not-found-title">Page Not Found</h1>

      <p v-if="pageName" class="not-found-page">
        <em>"{{ pageName }}"</em> does not yet exist in this wiki.
      </p>
      <p v-else class="not-found-page">
        This page does not exist yet.
      </p>

      <div class="not-found-actions">
        <button class="action-btn primary" @click="openSearch()">
          Search for "{{ pageName || 'this topic' }}"
        </button>

        <a
          v-if="createUrl"
          :href="createUrl"
          target="_blank"
          rel="noopener"
          class="action-btn secondary"
        >
          Create page via Pull Request
        </a>
        <a
          v-else
          :href="`https://github.com/${editRepo}/new/${editBranch}/docs/pages`"
          target="_blank"
          rel="noopener"
          class="action-btn secondary"
        >
          Create page via Pull Request
        </a>

        <div class="not-found-nav">
          <button @click="goBack" class="action-btn ghost">Go Back</button>
          <a href="/" class="action-btn ghost">Return to Home</a>
        </div>
      </div>

      <p class="not-found-hint">
        MUME Wiki is a community project. If you know about this topic,
        <a :href="createUrl || `https://github.com/${editRepo}`" target="_blank" rel="noopener">
          contribute a page
        </a>!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { inBrowser, useData, withBase } from 'vitepress'

const { site } = useData()
const pageName = ref('')
const rawSlug = ref('')

const editRepo = typeof __EDIT_REPO__ !== 'undefined' ? __EDIT_REPO__ : 'MUME/wiki'
const editBranch = typeof __EDIT_BRANCH__ !== 'undefined' ? __EDIT_BRANCH__ : 'main'

const createUrl = computed(() => {
  if (!rawSlug.value) return null
  const filename = rawSlug.value.replace(/\s+/g, '_') + '.md'
  const stub = [
    '---',
    `title: ${rawSlug.value}`,
    'description: ',
    'tags:',
    '  - ',
    '---',
    '',
    `# ${rawSlug.value}`,
    '',
    '<!-- Add content here -->',
  ].join('\n')
  return `https://github.com/${editRepo}/new/${editBranch}/docs/pages?filename=${encodeURIComponent(filename)}&value=${encodeURIComponent(stub)}`
})

function goBack() {
  if (inBrowser) window.history.back()
}

function openSearch() {
  if (!inBrowser) return
  // Try to find the search button and trigger it
  const selectors = ['.VPNavBarSearch button', '.DocSearch-Button', '.search-root button']
  for (const s of selectors) {
    const btn = document.querySelector<HTMLElement>(s)
    if (btn) {
      btn.click()
      // Pre-fill the input if it's already there or appears quickly
      setTimeout(() => {
        const input = document.querySelector<HTMLInputElement>('#localsearch-input, .VPLocalSearchBox input[type="search"]')
        if (input && pageName.value) {
          input.value = pageName.value
          input.dispatchEvent(new Event('input', { bubbles: true }))
          input.focus()
        }
      }, 100)
      return
    }
  }
  // Fallback to keyboard shortcut
  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))
}

function normalizeFragment(fragment: string) {
  if (!fragment) return ''
  // MediaWiki uses underscores for spaces in fragments
  const text = decodeURIComponent(fragment).replace(/_/g, ' ')
  // VitePress slugification (standard markdown-it-anchor style)
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

onMounted(async () => {
  if (!inBrowser) return

  const params = new URLSearchParams(window.location.search)
  const redirectedFrom = params.get('redirect')
  let url: URL | null = null

  if (redirectedFrom) {
    try {
      // redirectedFrom is a full path + search + hash
      url = new URL(redirectedFrom, window.location.origin)
    } catch (e) {}
  } else {
    url = new URL(window.location.href)
  }

  // Handle MediaWiki legacy links:
  // 1. index.php?title=Page_Name#Fragment
  // 2. index.php/Page_Name#Fragment
  let legacyTitle = url?.searchParams.get('title')
  if (!legacyTitle && url?.pathname.includes('index.php/')) {
    const parts = url.pathname.split('index.php/')
    if (parts.length > 1) {
      legacyTitle = parts[1]
    }
  }

  const fragment = url?.hash.slice(1)

  if (legacyTitle) {
    const term = legacyTitle.replace(/[_-]/g, ' ').toLowerCase().trim()
    try {
      const response = await fetch(withBase('/pages-meta.json'))
      if (response.ok) {
        const meta = await response.json()
        const targetPath = meta.terms[term]
        if (targetPath) {
          let finalUrl = withBase(targetPath)
          if (fragment) {
            finalUrl += '#' + normalizeFragment(fragment)
          }
          window.location.replace(finalUrl)
          return
        }
      }
    } catch (e) {
      console.error('Failed to fetch pages-meta.json for redirection', e)
    }
  }

  // Fallback: existing 404 guessing logic
  const segments = (url?.pathname || window.location.pathname).split('/').filter(Boolean)
  let slug = ''
  for (let i = segments.length - 1; i >= 0; i--) {
    const s = segments[i].replace(/\.html$/, '')
    // Ignore common infrastructure segments
    if (s && s !== '404' && s !== 'wiki' && s !== 'index.php' && !/^pr-\d+$/.test(s)) {
      slug = s
      break
    }
  }

  // If we have a legacy title but no direct match, use it for the page name
  if (!slug && legacyTitle) {
    slug = legacyTitle
  }

  rawSlug.value = decodeURIComponent(slug).replace(/[_-]/g, ' ')
  pageName.value = rawSlug.value
    ? rawSlug.value.charAt(0).toUpperCase() + rawSlug.value.slice(1)
    : ''
})
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 3rem 1.5rem;
}

.not-found-inner {
  max-width: 520px;
  text-align: center;
}

.not-found-icon {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  opacity: 0.5;
}

.not-found-title {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2rem;
  color: var(--mume-gold, #c9a84c);
  margin: 0 0 0.75rem;
  border: none !important;
}

.not-found-page {
  color: var(--vp-c-text-2, #b0a080);
  font-size: 1.05rem;
  margin: 0 0 2rem;
}

.not-found-page em {
  color: var(--vp-c-text-1, #d4c9b0);
  font-style: normal;
  font-weight: 600;
}

.not-found-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 2rem;
}

.not-found-nav {
  display: flex;
  gap: 0.75rem;
}

.not-found-nav .action-btn {
  min-width: 116px;
}

.action-btn {
  display: inline-block;
  min-width: 240px;
  padding: 0.55em 1.4em;
  border-radius: 4px;
  font-size: 0.95rem;
  font-family: inherit;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  border: 1px solid transparent;
}

.action-btn.primary {
  background: var(--mume-gold, #c9a84c);
  color: #1a1410;
  border-color: var(--mume-gold, #c9a84c);
}
.action-btn.primary:hover {
  background: var(--mume-gold-light, #e0c070);
  border-color: var(--mume-gold-light, #e0c070);
}

.action-btn.secondary {
  background: transparent;
  color: var(--mume-gold, #c9a84c);
  border-color: var(--mume-gold, #c9a84c);
}
.action-btn.secondary:hover {
  background: rgba(201,168,76,0.1);
  text-decoration: none;
}

.action-btn.ghost {
  background: transparent;
  color: var(--vp-c-text-2, #b0a080);
  border-color: var(--mume-border, #3d3020);
}
.action-btn.ghost:hover {
  color: var(--mume-gold, #c9a84c);
  border-color: var(--mume-gold, #c9a84c);
  text-decoration: none;
}

.not-found-hint {
  font-size: 0.875rem;
  color: var(--vp-c-text-3, #8a7d65);
  margin: 0;
}

.not-found-hint a {
  color: var(--mume-gold, #c9a84c);
}
</style>
