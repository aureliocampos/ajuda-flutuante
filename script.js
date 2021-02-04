const buttonHelpChat = document.querySelector('.help-chat__button');
const buttonHelpChatText = document.querySelector('.help-chat__button .help-chat__text');
const buttonHelpChatIcon = document.querySelector('.help-chat__button .help-chat__figure');
const navListHelpChat = document.querySelector('.help-chat__nav');
const listHelpChat = document.querySelector('.help-chat__items');
const listOfHelpChatItems = Array.from(document.querySelectorAll('.help-chat__items-item.help-chat__container__item'))
const containerMessage = document.querySelector('.help-chat__container-message')

const iconHelp = `<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.349206 23.5L1.57143 19.6381L2.18254 17.75C0.698413 15.8619 0 13.7164 0 11.3134C0 5.30597 4.97619 0.5 11 0.5C17.0238 0.5 22 5.39179 22 11.3134C22 17.2351 17.0238 22.1269 11 22.1269C9.86508 22.1269 8.29365 22.041 6.98413 21.4403L0.349206 23.5ZM11 2.1306C5.84921 2.1306 1.57143 6.25 1.57143 11.3993C1.57143 13.6306 2.26984 15.4328 3.66667 17.2351L3.92857 17.5784L2.70635 21.1828L7.07143 19.8955L7.33333 20.0672C8.20635 20.4963 9.51587 20.7537 10.9127 20.7537C16.0635 20.7537 20.3413 16.6343 20.3413 11.4851C20.4286 6.25 16.1508 2.1306 11 2.1306Z" fill="white"/>
<path d="M8.46825 7.45148C8.64286 7.27984 8.81746 7.19402 8.99206 7.02238C9.16667 6.93656 9.42857 6.76491 9.60317 6.67909C9.86508 6.59327 10.0397 6.50745 10.3016 6.50745C10.5635 6.42163 10.8254 6.42163 11.0873 6.42163C11.5238 6.42163 11.873 6.50745 12.2222 6.59327C12.5714 6.67909 12.8333 6.85074 13.0952 7.02238C13.3571 7.19402 13.5317 7.45148 13.619 7.70894C13.7937 8.05223 13.881 8.39551 13.881 8.7388C13.881 9.08208 13.7937 9.33954 13.7063 9.597C13.619 9.85447 13.5317 10.0261 13.3571 10.1978C13.1825 10.3694 13.0952 10.541 12.9206 10.6269C12.746 10.7985 12.5714 10.8843 12.3968 10.9701C12.2222 11.056 12.1349 11.2276 11.9603 11.3134C11.873 11.3992 11.7857 11.5709 11.7857 11.6567L11.6111 12.6007H10.2143L10.0397 11.5709C10.0397 11.3992 10.0397 11.1418 10.127 11.056C10.2143 10.8843 10.3016 10.7127 10.4762 10.6269C10.6508 10.541 10.7381 10.3694 10.9127 10.2836C11.0873 10.1978 11.2619 10.0261 11.4365 9.94029C11.6111 9.76865 11.6984 9.68283 11.7857 9.51118C11.873 9.33954 11.9603 9.1679 11.9603 8.91044C11.9603 8.65297 11.873 8.48133 11.6984 8.30969C11.5238 8.05223 11.2619 8.05223 11 8.05223C10.7381 8.05223 10.5635 8.05223 10.3889 8.05223C10.2143 8.13805 10.127 8.13805 9.95238 8.22387C9.86508 8.30969 9.77778 8.30969 9.69048 8.39551C9.60317 8.48133 9.51587 8.48133 9.42857 8.48133C9.25397 8.48133 9.07936 8.39551 8.99206 8.22387L8.46825 7.45148ZM9.69048 15.0037C9.69048 14.8321 9.69048 14.6604 9.77778 14.5746C9.86508 14.403 9.95238 14.3172 10.0397 14.2313C10.127 14.1455 10.3016 14.0597 10.3889 13.9739C10.5635 13.888 10.6508 13.8881 10.8254 13.8881C11 13.8881 11.1746 13.888 11.2619 13.9739C11.4365 14.0597 11.5238 14.1455 11.6111 14.2313C11.6984 14.3172 11.7857 14.4888 11.873 14.5746C11.9603 14.7463 11.9603 14.8321 11.9603 15.0037C11.9603 15.1754 11.9603 15.347 11.873 15.4328C11.7857 15.6045 11.6984 15.6903 11.6111 15.7761C11.5238 15.8619 11.3492 15.9478 11.2619 16.0336C11.0873 16.1194 11 16.1194 10.8254 16.1194C10.6508 16.1194 10.4762 16.1194 10.3889 16.0336C10.2143 15.9478 10.127 15.8619 10.0397 15.7761C9.95238 15.6903 9.86508 15.5186 9.77778 15.4328C9.69048 15.347 9.69048 15.1754 9.69048 15.0037Z" fill="white"/>
</svg>
`
const iconCloseHelp = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.52941 5.9823L11.8941 0.60177C12.0353 0.460177 12.0353 0.247788 11.8941 0.106195C11.7529 -0.0353982 11.5412 -0.0353982 11.4 0.106195L5.96471 5.55752L0.6 0.106195C0.458824 -0.0353982 0.247059 -0.0353982 0.105882 0.106195C-0.0352941 0.176991 -0.0352941 0.460177 0.105882 0.60177L5.47059 5.9823L0.105882 11.3628C-0.0352941 11.5044 -0.0352941 11.7168 0.105882 11.8584C0.176471 12 0.247059 12 0.317647 12C0.388235 12 0.529412 12 0.6 11.9292L5.96471 6.47788L11.3294 11.9292C11.4 12 11.4706 12 11.6118 12C11.6824 12 11.8235 12 11.8941 11.9292C12.0353 11.7876 12.0353 11.5752 11.8941 11.4336L6.52941 5.9823Z" fill="white"/>
</svg>
`

const setHelpMessage = key => {
  const message = document.querySelector('.help-chat__container-block')
  message.innerHTML = ''

  switch (key) {
    case "discount":
      message.innerHTML = `
        <h2>Desconto</h2><p class="help-chat_message">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      `
      break;
    case "devolution":
      message.innerHTML = `
        <h2>Devolução</h2><p class="help-chat_message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      `
      break;
    case "tracking":
      message.innerHTML = `
        <h2>Rastreio</h2>
        <p class="help-chat_message">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      `
      break;
    default:
      message.innerHTML = `
        <h2>Contato</h2><p class="help-chat_message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      `
      break;
  }

  return message
} 

buttonHelpChat.addEventListener('click', () => {
  buttonHelpChat.classList.toggle('is-open')

  if (buttonHelpChat.classList.contains('is-open')) {
    buttonHelpChatText.textContent = 'Fechar'
    buttonHelpChatIcon.innerHTML = iconCloseHelp

    navListHelpChat.classList.add('is-active')

    const listOfHelpChatItemsReverse = listOfHelpChatItems.slice().reverse()    
    listOfHelpChatItemsReverse.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('is-active')
      }, 100 * index);
    })
  
  } else {
    buttonHelpChatText.textContent = 'Ajuda'
    buttonHelpChatIcon.innerHTML = iconHelp

    listOfHelpChatItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove('is-active')
        item.classList.remove('is-open')
        item.classList.remove('is-focus')
        
      }, 100 * index);
    })
    
    containerMessage.classList.remove('is-active')
    
    if (navListHelpChat.classList.contains('is-active')) {
      setTimeout(() => {
        navListHelpChat.classList.remove('is-active')
      }, 400);
    }
  }
})

listHelpChat.addEventListener('click', event => {
  const clickedElement = event.target.tagName;

  if( clickedElement === 'P' || clickedElement === 'FIGURE') {
    const element = event.target.offsetParent;
    
    if (element.classList.contains('is-focus')) {
      element.classList.remove('is-focus')
      containerMessage.classList.remove('is-active')
      
      listOfHelpChatItems.forEach(item => {
        item.classList.remove('is-open')
      })

      return
    }

    listOfHelpChatItems.forEach(item => {
      item.classList.add('is-open')
      item.classList.remove('is-focus')
    })

    element.classList.add('is-focus')

    containerMessage.classList.add('is-active')

    setHelpMessage(element.dataset.key)
  }
  

  if (clickedElement === 'LI') {
    const element = event.target;

    if (element.classList.contains('is-focus')) {
      element.classList.remove('is-focus')
      containerMessage.classList.remove('is-active')

      listOfHelpChatItems.forEach(item => {
        item.classList.remove('is-open')
      })

      return
    }

    listOfHelpChatItems.forEach(item => {
      item.classList.add('is-open')
      item.classList.remove('is-focus')
    })

    element.classList.add('is-focus')

    containerMessage.classList.add('is-active')

    setHelpMessage(element.dataset.key)
  }

  if ( clickedElement === 'svg') {
    const element = event.target.parentElement.offsetParent

    if (element.classList.contains('is-focus')) {
      element.classList.remove('is-focus')
      containerMessage.classList.remove('is-active')

      listOfHelpChatItems.forEach(item => {
        item.classList.remove('is-open')
      })

      return
    }

    listOfHelpChatItems.forEach(item => {
      item.classList.add('is-open')
      item.classList.remove('is-focus')
    })

    element.classList.add('is-focus')

    containerMessage.classList.add('is-active')

    setHelpMessage(element.dataset.key)
  }

  if ( clickedElement === 'path') {
    const element = event.target.parentElement.parentElement.offsetParent

    if (element.classList.contains('is-focus')) {
      element.classList.remove('is-focus')
      containerMessage.classList.remove('is-active')

      listOfHelpChatItems.forEach(item => {
        item.classList.remove('is-open')
      })

      return
    }

    listOfHelpChatItems.forEach(item => {
      item.classList.add('is-open')
      item.classList.remove('is-focus')
    })

    element.classList.add('is-focus')

    containerMessage.classList.add('is-active')

    setHelpMessage(element.dataset.key)
  }
})


