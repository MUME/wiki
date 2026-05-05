import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import ImageMap from './components/ImageMap.vue'
import StubNotice from './components/StubNotice.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router }) {
    app.component('ImageMap', ImageMap)
    app.component('NotFound', NotFound)
    app.component('StubNotice', StubNotice)

    // Handle 404 redirection from public/404.html shim
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const redirectedPath = urlParams.get('redirect')
      if (redirectedPath) {
        // Use history.replaceState to clean up the URL without a full reload
        window.history.replaceState(null, '', redirectedPath)
        // Optionally, force the router to re-evaluate the path
        if (router) {
          router.go(redirectedPath)
        }
      }
    }
  }
}
