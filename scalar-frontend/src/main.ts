import './assets/main.css'
import { createApp } from 'vue'
import * as Sentry from "@sentry/vue";
import App from './App.vue'
import router from './router'

const app = createApp(App)
Sentry.init({
  app,
  dsn: "http://72029b7f475946548aee35257200e45b@localhost:8000/1",
  tracesSampleRate: 0.01, // 1% of transactions — adjust to your needs
});
app.use(router)

app.mount('#app')
