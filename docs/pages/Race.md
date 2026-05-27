---
title: Race
description: Redirect to Playable Races
editLink: false
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  router.go('/races')
})
</script>

# Redirecting...

This page has moved to [Playable Races](/races).
