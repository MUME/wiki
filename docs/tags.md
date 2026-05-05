---
title: Page Tag Index
description: Browse all MUME Wiki pages organized by category tag.
layout: page
---

<script setup>
import { withBase } from 'vitepress'
import { slugify } from './.vitepress/shared'
import { data as tagsData } from './tags.data.ts'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const sortedTags = Object.keys(tagsData).sort((a, b) => a.localeCompare(b))

function tagsForLetter(letter) {
  return sortedTags.filter(t => t[0].toUpperCase() === letter)
}

function hasLetter(letter) {
  return sortedTags.some(t => t[0].toUpperCase() === letter)
}

function scrollToTop() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<div class="tags-page">
<div class="tag-header">
<h1 id="page-tag-index" tabindex="-1">Page Tag Index</h1>
<p class="tag-description">
Explore the MUME Wiki through our organized directory of tags.
Click on a letter to jump to that section, or use the main site search to find specific topics.
</p>
</div>

<div class="az-nav">
<template v-for="letter in alphabet" :key="letter">
<a v-if="hasLetter(letter)" :href="'#' + letter" class="az-link">{{ letter }}</a>
<span v-else class="az-disabled">{{ letter }}</span>
</template>
</div>

<div class="tag-index">
<template v-for="letter in alphabet" :key="letter">
<div v-if="hasLetter(letter)" class="tag-group">
<div class="tag-group-header">
<h2 :id="letter" class="tag-letter">{{ letter }}</h2>
<a href="#page-tag-index" class="back-to-top" @click.prevent="scrollToTop">Back to Top ↑</a>
</div>
<div class="tag-grid">
<template v-for="tag in tagsForLetter(letter)" :key="tag">
<div class="tag-section">
<div :id="'tag-' + slugify(tag)" class="tag-name">
{{ tag }} <span class="tag-count">{{ tagsData[tag].length }}</span>
</div>
<ul class="tag-pages">
<li v-for="page in tagsData[tag]" :key="page.url">
<a :href="withBase(page.url)">{{ page.title }}</a>
</li>
</ul>
</div>
</template>
</div>
</div>
</template>
</div>
</div>
