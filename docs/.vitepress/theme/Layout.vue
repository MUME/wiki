<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import NotFound from './NotFound.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-before>
      <StubNotice />
      <div v-if="frontmatter.hero && frontmatter.hero.image" class="hero-image-fix">
        <!-- Injected to ensure local images are used -->
      </div>
    </template>
    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>
