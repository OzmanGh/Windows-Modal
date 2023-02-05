const modalBtn = document.getElementsByClassName('show-modal');
const modalEl = document.querySelector('.modal');
const overLay = document.querySelector('.overLay');
const closeModal = document.querySelector('.close-modal');

const show_modal_overLay = function () {
  modalEl.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

const hide_modal_overLay = function () {
  modalEl.classList.add('hidden');
  overLay.classList.add('hidden');
};

// showing modal whenever button click
for (let i = 0; i < modalBtn.length; i++) {
  modalBtn[i].addEventListener('click', show_modal_overLay);
}

// closing modal whenever times button clicked
closeModal.addEventListener('click', hide_modal_overLay);

// closing modal if we clicked out side modal
overLay.addEventListener('click', hide_modal_overLay);

// Dealing with keyboared Events "Escape"
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    hide_modal_overLay();
  }
});
