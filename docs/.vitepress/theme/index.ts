import { nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import ImageMap from './components/ImageMap.vue'
import StubNotice from './components/StubNotice.vue'
import CookieConsent from './components/CookieConsent.vue'
import './style.css'

const GA_MEASUREMENT_ID = 'G-LL4RX9KM6Q'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router }) {
    app.component('ImageMap', ImageMap)
    app.component('NotFound', NotFound)
    app.component('StubNotice', StubNotice)
    app.component('CookieConsent', CookieConsent)

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

      // Track page views on route change in SPA mode
      if (router) {
        router.onAfterRouteChange = (to) => {
          nextTick(() => {
            if (typeof window.gtag === 'function') {
              window.gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                page_path: to,
                send_to: GA_MEASUREMENT_ID,
              })
            }
          })
        }
      }
    }
  }
}
