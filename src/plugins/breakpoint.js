/**
 * @NOTWORKING
 */
export default {
  install(Vue, options) {
    // 최대 값
    const bp = {
      sm: '768',
      md: '1023',
      lg: '1407',
      xl: '1408',
      // current >= md
      isDesktop: false,
      // current < md
      isTabletAndMobile: false,
      ...options
    }

    Vue.prototype.$bp = bp

    Vue.mixin({
      methods: {
        resizingWindow() {
          const currentX = window.innerWidth

          Vue.prototype.$bp.current =
            bp.sm >= currentX
              ? 'sm'
              : currentX >= bp.sm && bp.md >= currentX
              ? 'md'
              : currentX >= bp.md && bp.lg >= currentX
              ? 'lg'
              : currentX >= bp.lg && bp.xl >= currentX
              ? 'xl'
              : 'xl'

          Vue.prototype.$bp.isDesktop = currentX >= bp.md
          Vue.prototype.$bp.isTabletAndMobile = currentX < bp.md
        }
      },
      mounted() {
        this.resizingWindow()
        window.addEventListener('resize', this.resizingWindow)
      },
      beforeDestroy() {
        window.removeEventListener('resize', this.resizingWindow)
      }
    })
  }
}
