document.addEventListener('DOMContentLoaded', function () {
  const infoIcons = document.querySelectorAll('.info-icon')
  const popups = document.querySelectorAll('.popup')

  infoIcons.forEach((icon, index) => {
    icon.addEventListener('mouseenter', () => {
      const rect = icon.getBoundingClientRect()
      const popup = popups[index]

      const top = rect.top + window.scrollY
      const left = rect.left + window.scrollX + rect.width / 2

      popup.style.top = `${top}px`
      popup.style.left = `${left}px`

      popup.style.display = 'block'
    })

    // Keep the popup open when the mouse enters it
    popups[index].addEventListener('mouseenter', () => {
      popups[index].style.display = 'block'
    })

    // Close popup when mouse leaves the icon or the popup
    icon.addEventListener('mouseleave', () => {
      popups[index].style.display = 'none'
    })

    popups[index].addEventListener('mouseleave', () => {
      popups[index].style.display = 'none'
    })
  })
})
