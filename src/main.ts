import { createApp } from 'vue'
import App from './App.vue'
// import { createApp, defineComponent, h, ref, reactive } from 'vue'
// import HelloWorldVue from './components/HelloWorld.vue'
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
// const App = defineComponent({
//   setup() {
//     const num = ref(1)
//     const state = reactive({
//       name: 'li',
//     })
//     const numRef = num.value  这种只会加载为 1
//     setInterval(() => {
//       state.name += 1
//       num.value += 1
//     }, 5000)
//     return () => {
//       // const numRef = num.value  这种会按照我们需要正常加载 ，在闭包内每次外面更新里面会重新渲染
//       return h('div', { id: '#app' }, [
//         h('img', { alt: 'Vue logo', src: Img }),
//         h(HelloWorldVue, {
//           msg: 'Welcome to Your Vue.js + TypeScript App',
//           age: 18,
//         }),
//         h('p', state.name + numRef),
//       ])
//     }
//   },
// })
createApp(App).mount('#app')
