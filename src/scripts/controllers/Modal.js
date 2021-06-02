import Button from '../components/atoms/Button';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class ModalController {
  constructor () {
    this._entryPoint = document.querySelector(`#root`)
    this._wrapperNode = null;
    this._closeButton = null;
    this._handleClickEsc = this._handleClickEsc.bind(this);
    this._handleClickButton = this._handleClickButton.bind(this);
  }

  _closeModal () {
    clearAllBodyScrollLocks();
    this._wrapperNode.remove();
    this._wrapperNode = null;
    this._closeButton = null;

  }

  _handleClickEsc (evt) {
    if (evt.key === `Escape` && this._wrapperNode) {
      this._closeModal();
      document.removeEventListener(`keydown`, this._handleClickEsc);
    }
  }

  _handleClickButton () {
    this._closeButton.removeEventListener(`click`, this._handleClickButton)
    this._closeModal();
  }

  _applyEventListeners () {
    this._closeButton = this._wrapperNode.querySelector(`[data-modal-close]`);

    document.addEventListener(`keydown`, this._handleClickEsc);
    this._closeButton.addEventListener(`click`, this._handleClickButton);
    disableBodyScroll(this._wrapperNode, {
      reserveScrollBarGap: true
    });
  }

  renderModal (content) {
    this._wrapperNode = document.createElement(`div`);
    this._wrapperNode.classList.add(`modal`);

    const contentWrapper = document.createElement(`div`)
    contentWrapper.classList.add(`modal__content`);

    const closeButton = new Button({
      className: `modal__btn`,
      attributes: `data-modal-close tab-index="0"`,
      children: (`
        Закрыть модальное окно
        <svg class="modal__icon" viewBox="0 0 512.001 512.001">
          <use xlink:href="#icon-close-modal"></use>
        </svg>
      `)
    });

    contentWrapper.innerHTML = `${closeButton.getTemplate()}${content}`;
    this._wrapperNode.append(contentWrapper);

    this._entryPoint.prepend(this._wrapperNode);
    this._applyEventListeners();
  }
}

export default ModalController;
