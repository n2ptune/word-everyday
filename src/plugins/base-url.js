export default {
  install(Vue) {
    Vue.prototype.$baseURL = () =>
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4501/v0'
        : 'https://api.unending.xyz/v0'
  }
}
