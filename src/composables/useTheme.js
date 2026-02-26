import { ref, watch } from 'vue'

const STORAGE_KEY = 'case-theme'

const safeGetStorage = (key) => {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

const safeSetStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Ignore storage write failures (private mode / embedded webview restrictions)
  }
}

export const useTheme = () => {
  const isDark = ref(false)

  const applyTheme = (enabled) => {
    if (enabled) {
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.removeAttribute('data-theme')
    }
  }

  const initTheme = () => {
    const saved = safeGetStorage(STORAGE_KEY)
    if (saved !== null) {
      isDark.value = saved === 'dark'
    }
    applyTheme(isDark.value)
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  watch(isDark, (val) => {
    applyTheme(val)
    safeSetStorage(STORAGE_KEY, val ? 'dark' : 'light')
  })

  return {
    isDark,
    initTheme,
    toggleTheme
  }
}
