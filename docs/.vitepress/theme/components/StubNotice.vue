<template>
  <div v-if="isStub" class="stub-notice">
    <div class="stub-inner">
      <div class="stub-icon">📜</div>
      <div class="stub-content">
        <p class="stub-text">
          <strong>This page is a stub.</strong> You can help Middle-earth by
          <a :href="editUrl" target="_blank" rel="noopener">expanding it</a> with more information!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'

const { frontmatter, page } = useData()

const stubs = ref<string[]>([])

onMounted(async () => {
  try {
    const response = await fetch(withBase('/pages-meta.json'))
    const data = await response.json()
    stubs.value = data.stubs || []
  } catch (e) {
    console.error('Failed to load pages-meta.json', e)
  }
})

const isStub = computed(() => {
  if (frontmatter.value.stub === true) return true
  if (frontmatter.value.tags && frontmatter.value.tags.includes('Stubs')) return true

  const currentPath = '/' + page.value.relativePath.replace(/\.md$/, '')
  return stubs.value.includes(currentPath)
})

const editUrl = computed(() => {
  const repo = typeof __EDIT_REPO__ !== 'undefined' ? __EDIT_REPO__ : 'MUME/wiki'
  const branch = typeof __EDIT_BRANCH__ !== 'undefined' ? __EDIT_BRANCH__ : 'main'
  return `https://github.com/${repo}/edit/${branch}/docs/${page.value.relativePath}`
})
</script>

<style scoped>
.stub-notice {
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: var(--vp-c-bg-soft);
  border-left: 4px solid var(--mume-gold, #c9a84c);
  border-radius: 4px;
}

.stub-inner {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stub-icon {
  font-size: 1.5rem;
}

.stub-text {
  margin: 0;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}

.stub-text a {
  color: var(--mume-gold, #c9a84c);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.stub-text a:hover {
  color: var(--mume-gold-light, #e0c070);
}
</style>
