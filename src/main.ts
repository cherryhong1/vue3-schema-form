import { createApp } from 'vue'
// import App from './App.vue'
import App from './App'
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
