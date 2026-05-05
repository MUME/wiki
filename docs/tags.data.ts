import { createContentLoader } from 'vitepress'

interface TagEntry {
  title: string
  url: string
}

export interface TagsData {
  [tag: string]: TagEntry[]
}

export default createContentLoader('pages/*.md', {
  transform(rawData): TagsData {
    const map: TagsData = {}
    for (const page of rawData) {
      const tags: string[] = page.frontmatter?.tags ?? []
      for (const tag of tags) {
        if (!tag || typeof tag !== 'string') continue
        if (!map[tag]) map[tag] = []
        map[tag].push({
          title: page.frontmatter?.title ?? page.url.split('/').pop() ?? page.url,
          url: page.url,
        })
      }
    }
    // Sort pages within each tag alphabetically
    for (const tag of Object.keys(map)) {
      map[tag].sort((a, b) => a.title.localeCompare(b.title))
    }
    return map
  },
})
