function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    });
    return this;
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return this;
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    });
    return this;
  }
  
  return Object.freeze({
    elements,
    on,
    hide,
    show,
    addClass,
    removeClass,
  });
}

const buttons = $$('button');
buttons.hide().show().addClass('active').removeClass('active');
