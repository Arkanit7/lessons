export default function accordion() {
  const closePanel = (panel) => {
    const trigger = panel.querySelector('.accordion__trigger')
    const content = panel.querySelector(
      `#${trigger.getAttribute('aria-controls')}`
    )

    trigger.setAttribute('aria-expanded', false)
    content.hidden = true
  }
  const openPanel = (panel) => {
    const trigger = panel.querySelector('.accordion__trigger')
    const content = panel.querySelector(
      `#${trigger.getAttribute('aria-controls')}`
    )

    trigger.setAttribute('aria-expanded', true)
    content.hidden = false
  }
  const initializePanel = (panel, panels, isSingle) => {
    const trigger = panel.querySelector('.accordion__trigger')
    closePanel(panel)

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true'

      if (isSingle) panels.forEach(closePanel)
      isExpanded ? closePanel(panel) : openPanel(panel)
    })
  }
  const enablePanel = (panel) => {
    const trigger = panel.querySelector('.accordion__trigger')

    trigger.disabled = false
  }
  const disablePanel = (panel) => {
    const trigger = panel.querySelector('.accordion__trigger')

    trigger.disabled = true
  }

  const accordions = document.querySelectorAll('[data-accordion]')

  accordions.forEach((instance) => {
    const params = instance.dataset.accordion
      .replace(/\s*;\s*/g, ';')
      .split(';')
    const single = params.includes('single')
    const media = single ? params.filter((el) => el !== 'single')[0] : params[0]

    function shouldBeEnabled(mediaQuery, panels) {
      if (mediaQuery.matches) {
        panels.forEach((panel) => {
          closePanel(panel)
          enablePanel(panel)
        })
      } else {
        panels.forEach((panel) => {
          disablePanel(panel)
          openPanel(panel)
        })
      }
    }

    const panels = instance.querySelectorAll('.accordion__panel')

    panels.forEach((panel, index, array) => {
      initializePanel(panel, array, single)
    })

    if (media) {
      const mediaQuery = matchMedia(media)

      shouldBeEnabled(mediaQuery, panels)

      mediaQuery.addEventListener('change', () => {
        shouldBeEnabled(mediaQuery, panels)
      })
    } else {
      panels.forEach((panel) => {
        enablePanel(panel)
      })
    }
  })
}