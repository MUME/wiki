<template>
  <div class="image-map-container">
    <img :src="withBase('/img/Middle-earth.png')" alt="Map of Middle-earth" />
    <svg
      viewBox="0 0 800 560"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <template v-for="(area, index) in areas" :key="index">
        <a
          :xlink:href="withBase(normalizeHref(area.href))"
          :href="withBase(normalizeHref(area.href))"
          :title="area.title"
          class="map-area-link"
        >
          <circle v-if="area.type === 'circle'" :cx="area.cx" :cy="area.cy" :r="area.r" />
          <rect v-else-if="area.type === 'rect'" :x="area.x" :y="area.y" :width="area.width" :height="area.height" />
          <polygon v-else-if="area.type === 'poly'" :points="area.points" />
        </a>
      </template>
    </svg>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'

const props = defineProps({
  areas: {
    type: Array,
    required: true
  }
})

function normalizeHref(href) {
  if (href.startsWith('http')) return href

  // If it starts with ./ it's relative to the pages directory usually,
  // but let's make it absolute to /pages/ for robustness
  let clean = href
  if (clean.startsWith('./')) {
    clean = clean.slice(2)
  }

  // Ensure it starts with /pages/ unless it's a special root page
  if (!clean.startsWith('/') && !clean.includes(':')) {
     return '/pages/' + clean
  }

  return clean
}
</script>

<style scoped>
.image-map-container {
  position: relative;
  width: 100%;
  margin: 1.5rem 0;
  border: 1px solid var(--mume-border);
  border-radius: 8px;
  overflow: hidden;
  line-height: 0;
}
.image-map-container img {
  display: block;
  width: 100%;
  height: auto;
  border: none;
  margin: 0;
}
.image-map-container svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.map-area-link {
  pointer-events: all;
  cursor: pointer;
  outline: none;
}

.map-area-link circle,
.map-area-link rect,
.map-area-link polygon {
  /* Use a very faint fill so the area is clickable in all browsers */
  fill: rgba(0, 0, 0, 0.001);
  stroke: transparent;
  transition: all 0.2s;
}

.map-area-link:hover circle,
.map-area-link:hover rect,
.map-area-link:hover polygon,
.map-area-link:focus circle,
.map-area-link:focus rect,
.map-area-link:focus polygon {
  stroke: var(--vp-c-brand-1);
  stroke-width: 2px;
  fill: rgba(201, 168, 76, 0.15);
}
</style>
