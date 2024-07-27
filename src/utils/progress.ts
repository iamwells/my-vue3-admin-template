import nProgress from 'nprogress'

import 'nprogress/nprogress.css'

nProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
})

const progress = {
  start() {
    nProgress.start()
  },
  done() {
    nProgress.done()
  },
}

export default progress
