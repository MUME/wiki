<script setup lang="ts">
import { ref, onMounted } from 'vue'

const GA_MEASUREMENT_ID = 'G-LL4RX9KM6Q'
const CONSENT_KEY = 'mume_cookie_consent'

const showBanner = ref(false)

function initGtag() {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments)
    }
  }
}

function loadGtagScript() {
  if (typeof window === 'undefined') return
  if (document.getElementById('gtag-js')) return

  const script = document.createElement('script')
  script.id = 'gtag-js'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

function setConsent(granted: boolean) {
  initGtag()
  const consentState = granted ? 'granted' : 'denied'

  window.gtag('consent', 'update', {
    analytics_storage: consentState,
    ad_storage: consentState,
    ad_user_data: consentState,
    ad_personalization: consentState,
  })

  if (granted) {
    loadGtagScript()
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      allow_google_signals: false,
    })
  }
}

onMounted(() => {
  initGtag()

  // Default consent mode v2 to denied prior to user action
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })

  const getStoredConsent = (): string | null => {
    try {
      const ls = localStorage.getItem(CONSENT_KEY)
      if (ls === 'granted' || ls === 'denied') return ls
    } catch {}
    const match = document.cookie.match(new RegExp('(?:^|; )' + CONSENT_KEY + '=([^;]*)'))
    if (!match) return null
    try {
      return decodeURIComponent(match[1])
    } catch {
      return null
    }
  }

  const savedConsent = getStoredConsent()
  if (savedConsent === 'granted') {
    setConsent(true)
  } else if (savedConsent === 'denied') {
    setConsent(false)
  } else {
    showBanner.value = true
  }
})

function saveConsentPreference(value: string) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {}
  document.cookie = `${CONSENT_KEY}=${value}; path=/; max-age=31536000; SameSite=Lax`
}

function accept() {
  saveConsentPreference('granted')
  setConsent(true)
  showBanner.value = false
}

function decline() {
  saveConsentPreference('denied')
  setConsent(false)
  showBanner.value = false
}
</script>

<template>
  <Transition name="fade">
    <div v-if="showBanner" class="cookie-consent-banner" role="dialog" aria-label="Cookie Consent">
      <div class="cookie-consent-content">
        <p class="cookie-consent-text">
          We use cookies and Google Analytics to understand site usage and improve your experience.
        </p>
        <div class="cookie-consent-actions">
          <button class="cookie-btn cookie-btn-decline" @click="decline">Decline</button>
          <button class="cookie-btn cookie-btn-accept" @click="accept">Accept</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-consent-banner {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 200;
  max-width: 420px;
  width: calc(100% - 3rem);
  padding: 1.25rem;
  border-radius: 12px;
  background-color: var(--vp-c-bg-elv);
  backdrop-filter: blur(8px);
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-3);
  font-family: var(--vp-font-family-base);
}

@media (max-width: 640px) {
  .cookie-consent-banner {
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
    width: auto;
    padding: 1rem;
  }
}

.cookie-consent-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cookie-consent-text {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.cookie-consent-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

.cookie-btn {
  padding: 0.4rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}

.cookie-btn-decline {
  background-color: transparent;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}

.cookie-btn-decline:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.cookie-btn-accept {
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  border: 1px solid var(--vp-c-brand-1);
}

.cookie-btn-accept:hover {
  background-color: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
