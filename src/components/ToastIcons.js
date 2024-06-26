/* eslint-disable max-len */
import { defineComponent } from 'vue';
import { ToastTheme, ToastType } from 'vue3-toastify';

export const ComponentIcon = defineComponent({
  props: {
    theme: {
      type: ToastTheme,
    },
    type: {
      type: ToastType,
    },
    path: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props, { attrs }) {
    return () => (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
      >
        <path d="M525.64 347.76c-61.88 0-112.2-50.32-112.2-112.2s50.32-112.2 112.2-112.2 112.2 50.32 112.2 112.2-50.32 112.2-112.2 112.2z m0-176.36c-35.4 0-64.2 28.8-64.2 64.2s28.8 64.2 64.2 64.2 64.2-28.8 64.2-64.2-28.8-64.2-64.2-64.2zM809.6 627.32c-61.88 0-112.2-50.32-112.2-112.2s50.32-112.2 112.2-112.2 112.2 50.32 112.2 112.2-50.32 112.2-112.2 112.2z m0-176.4c-35.4 0-64.2 28.8-64.2 64.2s28.8 64.2 64.2 64.2 64.2-28.8 64.2-64.2-28.8-64.2-64.2-64.2zM525.64 901.16c-61.88 0-112.2-50.32-112.2-112.2s50.32-112.2 112.2-112.2 112.2 50.32 112.2 112.2-50.32 112.2-112.2 112.2z m0-176.36c-35.4 0-64.2 28.8-64.2 64.2s28.8 64.2 64.2 64.2 64.2-28.8 64.2-64.2-28.8-64.2-64.2-64.2z" fill="#99999D" p-id="1467"></path><path d="M266.92 473.36a23.98 23.98 0 0 1-15.92-41.96l170.52-150.96a23.96 23.96 0 0 1 33.88 2.08c8.8 9.92 7.84 25.08-2.08 33.88L282.8 467.32a23.9 23.9 0 0 1-15.88 6.04zM721.4 539.12H296.36c-13.24 0-24-10.76-24-24s10.76-24 24-24h425.08c13.24 0 24 10.76 24 24-0.04 13.24-10.76 24-24.04 24zM453.68 762c-5.44 0-10.96-1.84-15.44-5.64L251.48 599.2a23.98 23.98 0 0 1-2.92-33.8 23.98 23.98 0 0 1 33.8-2.92l186.76 157.16a23.98 23.98 0 0 1 2.92 33.8 23.888 23.888 0 0 1-18.36 8.56z" fill="#99999D" p-id="1468"></path><path d="M208.16 627.32c-61.88 0-112.2-50.32-112.2-112.2s50.32-112.2 112.2-112.2 112.2 50.32 112.2 112.2-50.36 112.2-112.2 112.2z m0-176.4c-35.4 0-64.2 28.8-64.2 64.2s28.8 64.2 64.2 64.2 64.2-28.8 64.2-64.2-28.8-64.2-64.2-64.2z" fill="#3A4ED0" p-id="1469"></path>
          
      </svg>
    );
  },
});

export const VNodeIcon = () => (
  <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.75 18.0143V19.5093C35.748 23.0135 34.6133 26.4231 32.5152 29.2298C30.417 32.0364 27.4678 34.0896 24.1075 35.0831C20.7471 36.0767 17.1555 35.9574 13.8685 34.743C10.5815 33.5286 7.77506 31.2842 5.86781 28.3445C3.96056 25.4049 3.05466 21.9274 3.28522 18.4308C3.51579 14.9342 4.87046 11.6058 7.14721 8.94204C9.42395 6.27826 12.5008 4.4218 15.9188 3.64954C19.3368 2.87728 22.9129 3.2306 26.1138 4.6568M35.75 6.5L19.5 22.7663L14.625 17.8913" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);
