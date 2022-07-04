import { createApp, defineComponent, h, ref, reactive } from 'vue'
import HelloWorldVue from './components/HelloWorld.vue'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Img = require('./assets/logo.png')
function renderHelloWorld(num: number) {
  return <HelloWorldVue age={num}></HelloWorldVue>
}
export default defineComponent({
  setup() {
    const num = ref(1)
    const state = reactive({
      name: 'li',
    })
    const numRef = num.value //这种只会加载为 1
    setInterval(() => {
      state.name += 1
      num.value += 1
    }, 5000)
    return () => {
      return (
        <div id="app">
          <img src={Img} alt="vue3" />
          <p>{state.name}</p>
          <input type="text" v-model={state.name} />
          {renderHelloWorld(12)}
        </div>
      )
    }
  },
})
