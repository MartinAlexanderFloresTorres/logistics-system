export const overflowBody = (isHidden: boolean) => {
  const body = document.querySelector('body');

  if (body instanceof HTMLElement) {
    const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    body.style.overflow = isHidden ? 'hidden' : 'unset';
    body.style.paddingRight = `${scrollBarWidth}px`;
  }
};
