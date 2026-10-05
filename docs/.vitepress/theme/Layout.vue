<script setup>
import { useData, withBase } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import NotFound from './NotFound.vue'
import CookieConsent from './components/CookieConsent.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-before>
      <nav v-if="frontmatter.wikiTopic" aria-label="Breadcrumb" class="wiki-breadcrumb">
        <a :href="withBase('/')">Wiki</a> →
        <a :href="withBase(frontmatter.wikiTopicRoute)">{{ frontmatter.wikiTopic }}</a> →
        <span>{{ frontmatter.title }}</span>
      </nav>
      <StubNotice />
      <div v-if="frontmatter.hero && frontmatter.hero.image" class="hero-image-fix">
        <!-- Injected to ensure local images are used -->
      </div>
    </template>
    <template #not-found>
      <NotFound />
    </template>
    <template #doc-footer-before>
      <p><a :href="withBase('/pages/Contributing')">Contribute with Pages CMS or GitHub</a></p>
    </template>
    <template #layout-bottom>
      <CookieConsent />
    </template>
  </Layout>
</template>
