import nProgress from 'nprogress'

import { loadingBar } from './native-api'

import 'nprogress/nprogress.css'

nProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
})

const progress = {
  start() {
    // nProgress.start()
    loadingBar.start()
  },
  done() {
    // nProgress.done()
    loadingBar.finish()
  },
  error() {
    loadingBar.error()
  },
}

export default progress
