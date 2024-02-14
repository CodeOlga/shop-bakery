// змінює title сторінки, коли відкрита/закрита вкладка у браузері

const initialTitle = document.title;

window.onblur = () => {
  document.title = "Please, come back";
};

window.onfocus = () => {
  document.title = initialTitle;
};
