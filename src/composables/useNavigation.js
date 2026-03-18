import { ref, nextTick, onMounted, onUnmounted } from 'vue'

export const useNavigation = () => {
  const currentTab = ref('basics')
  const navIndicatorStyle = ref({ width: '0px', left: '0px' })
  const isJelly = ref(false)
  const navRefBasics = ref(null)
  const navRefCases = ref(null)

  const updateNavIndicator = () => {
    const target = currentTab.value === 'basics' ? navRefBasics.value : navRefCases.value
    if (target) {
      navIndicatorStyle.value = {
        width: `${target.offsetWidth}px`,
        left: `${target.offsetLeft}px`
      }
    }
  }

  const switchTab = (tab) => {
    currentTab.value = tab
    isJelly.value = false
    nextTick(() => {
      isJelly.value = true
      setTimeout(() => {
        isJelly.value = false
      }, 500)
      updateNavIndicator()
    })
  }

  const startX = ref(0)

  const getPointerX = (event) => {
    if (typeof event?.clientX === 'number') return event.clientX
    return null
  }

  const onPointerDown = (event) => {
    const pointerX = getPointerX(event)
    if (pointerX === null) return

    // Only track primary pointer to avoid accidental tab switches.
    if (event?.isPrimary === false) return

    startX.value = pointerX
  }

  const onPointerUp = (event) => {
    const pointerX = getPointerX(event)
    if (pointerX === null) return
    if (event?.isPrimary === false) return

    const diff = pointerX - startX.value
    if (diff < -80) switchTab('cases')
    if (diff > 80) switchTab('basics')
  }

  onMounted(() => {
    nextTick(() => updateNavIndicator())
    window.addEventListener('resize', updateNavIndicator)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateNavIndicator)
  })

  return {
    currentTab,
    navIndicatorStyle,
    isJelly,
    navRefBasics,
    navRefCases,
    switchTab,
    updateNavIndicator,
    onPointerDown,
    onPointerUp
  }
}
