import { createApp } from 'vue'
import App from './App.vue'
// import { createApp, defineComponent, h } from 'vue'
// import HelloWorldVue from './components/HelloWorld.vue'
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const Img = require('./assets/logo.png')

// const App = defineComponent({
//   render() {
//     return h('div', { id: '#app' }, [
//       h('img', { alt: 'Vue logo', src: Img }),
//       h(HelloWorldVue, {
//         msg: 'Welcome to Your Vue.js + TypeScript App',
//         age: 18,
//       }),
//     ])
//   },
// })
createApp(App).mount('#app')
