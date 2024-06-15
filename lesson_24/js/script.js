// @ts-check

'use strict'

class Demo {
  constructor(demoElement) {
    this.startButton = demoElement.querySelector('[data-demo="start"]')
    this.resetButton = demoElement.querySelector('[data-demo="reset"]')
    this.iframe = demoElement.querySelector('iframe')
    this.initStartButton()
    this.initResetButton()
  }

  initStartButton() {
    this.startButton?.addEventListener('click', () => {
      const { contentDocument } = this.iframe
      const script = contentDocument.head.querySelector('script')
      const source = script.dataset.src

      script.setAttribute('src', source)
    })
  }

  initResetButton() {
    this.resetButton?.addEventListener('click', () => {
      const { contentWindow } = this.iframe
      const { location } = contentWindow

      contentWindow.scrollTo({
        top: 0,
        behavior: 'instant',
      })

      location.reload()
    })
  }
}

const demoArray = document.querySelectorAll('.demo')

demoArray.forEach((item) => new Demo(item))
