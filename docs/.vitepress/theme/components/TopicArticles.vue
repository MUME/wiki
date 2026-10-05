<script setup>
import { withBase } from 'vitepress'
import meta from '../../../public/pages-meta.json'
defineProps({ topic: String })
</script>
<template>
  <section><h2 :id="'topic-articles'">All articles</h2>
    <ul><li v-for="article in meta.topics[topic]" :key="article.url"><a :href="withBase(article.url)">{{ article.title }}</a></li></ul>
  </section>
</template>
