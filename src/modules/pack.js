export default class Pack {
  constructor(...args) {
    this.packElement = this.create(...args);

    this.createPackModal = this.createPackModal.bind(this);
    this.packElement.addEventListener('click', this.createPackModal);
  }

  create(id, image, title, text, price) {
    const fragment = document.createDocumentFragment();
    const packsColumn = document.createElement('div');
    const pack = document.createElement('a');
    const packHead = document.createElement('div');
    const packImage = document.createElement('img');
    const packBody = document.createElement('div');
    const packTitle = document.createElement('h2');
    const packText = document.createElement('p');
    const packFoot = document.createElement('div');
    const packPrice = document.createElement('div');
    const packPriceCur = document.createElement('sup');
    const packPriceNum = document.createElement('span');
    const packPriceMounth = document.createElement('span');

    packsColumn.classList.add('packs__column');
    pack.classList.add('pack');
    pack.setAttribute('data-id', id);
    packHead.classList.add('pack__head');
    packImage.classList.add('pack__img');
    packBody.classList.add('pack__body');
    packTitle.classList.add('pack__title');
    packText.classList.add('pack__paragraph');
    packFoot.classList.add('pack__foot');
    packPrice.classList.add('pack__price');
    packPriceCur.classList.add('pack__price-cur');
    packPriceNum.classList.add('pack__price-num');
    packPriceMounth.classList.add('pack__price-mounth');

    pack.href = '#';
    packImage.src = image;
    
    packImage.alt = title;
    packTitle.textContent = title;
    packText.textContent = text;
    packPriceCur.textContent = '$';
    packPriceNum.textContent = price;
    packPriceMounth.textContent = '/ mounth';

    packHead.appendChild(packImage);
    pack.appendChild(packHead);
    packBody.appendChild(packTitle);
    packBody.appendChild(packText);
    pack.appendChild(packBody);
    packPrice.appendChild(packPriceCur);
    packPrice.appendChild(packPriceNum);
    packPrice.appendChild(packPriceMounth);
    packFoot.appendChild(packPrice);
    pack.appendChild(packFoot);
    packsColumn.appendChild(pack);
    fragment.appendChild(packsColumn);

    return packsColumn;
  }

  createPackModal() {
    const modal = document.createElement('div');
    const modalOverlay = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalClose = document.createElement('button');
    const clonePackHead = this.packElement.querySelector('.pack__head').cloneNode(true);
    const clonePackBody = this.packElement.querySelector('.pack__body').cloneNode(true);
    const clonePackFoot = this.packElement.querySelector('.pack__foot').cloneNode(true);

    modal.classList.add('modal');
    modalOverlay.classList.add('modal__overlay');
    modalContent.classList.add('modal__content');
    modalClose.classList.add('modal__close');
    modalClose.title = 'Close';
       
    modalContent.appendChild(clonePackHead);
    modalContent.appendChild(clonePackBody);
    modalContent.appendChild(clonePackFoot);
    modalContent.appendChild(modalClose);    
    modal.appendChild(modalContent);
    modal.appendChild(modalOverlay); 
    this.packElement.closest('.packs__items').appendChild(modal);

    modalClose.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('modal__close')) {
        this.packElement.closest('.packs__items').removeChild(target.closest('.modal'));
      }
    });

    modalOverlay.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('modal__overlay')) {
        this.packElement.closest('.packs__items').removeChild(target.closest('.modal'));
      }
    });
    
    return modal
  }

}
