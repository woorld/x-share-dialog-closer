// TODO: 早期リターン
if (location.pathname.startsWith('/intent')) {
  const observer = new MutationObserver(() => {
    const textbox = document.querySelector('main[role="main"] div[data-testid="tweetTextarea_0"][role="textbox"]')
    const closeButton = document.querySelector('button[data-testid="app-bar-close"]')

    if (!closeButton || !textbox || !textbox.textContent) {
      return
    }

    closeButton.click()
    observer.disconnect()
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}
