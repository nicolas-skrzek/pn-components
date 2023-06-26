interface IHTMLElementClicketyClick extends HTMLElement {
  /* eslint-disable no-unused-vars */
  clickOutsideEvent?(event: MouseEvent): void
}

export const clickOutside = {
  beforeMount: (el: IHTMLElementClicketyClick, binding: any) => {
    const element: IHTMLElementClicketyClick = el

    element.clickOutsideEvent = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (!(el === target || el.contains(target))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', element.clickOutsideEvent)
  },
  unmounted: (el: IHTMLElementClicketyClick) => {
    if (el?.clickOutsideEvent) {
      document.removeEventListener('click', el.clickOutsideEvent)
    }
  },
}
