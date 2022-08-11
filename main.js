import { createApp } from 'vue'
import App from './App.vue'
import { myRequest } from './util/api.js'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import router from './routes'

const app = createApp(App)

app.config.globalProperties.$myRequest = myRequest;
// app.use(ElementPlus)
// app.use (router)

// app.config.globalProperties.$filters = {
//     format(value:string) {
//         if (value) {
//             return dayjs(value).format('YYYY-MM-DD')
//         } else {
//             return ''
//         }
//     }
// }




app.mount('#app')
