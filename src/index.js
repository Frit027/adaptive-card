const classes = {
    textContainer: 'text-container',
    text: 'text-container__text',
    maxHeightTextContainer: 'text-container_max-height',
    gradient: 'text-container_gradient',
    button: 'footer__more-text-button',
    arrow: 'footer__arrow',
    arrowUp: 'footer__arrow_up',
};

const initScript = () => {
  const button = document.querySelector(`.${classes.button}`);
  const arrow = button.querySelector(`.${classes.arrow}`);
  const textContainer = document.querySelector(`.${classes.textContainer}`);
  const text = textContainer.querySelector(`.${classes.text}`);

  button.addEventListener('click', () => {
      arrow.classList.toggle(classes.arrowUp);
      textContainer.classList.toggle(classes.gradient);

      textContainer.style.maxHeight = textContainer.classList.contains(classes.maxHeightTextContainer)
        ? `${text.offsetHeight}px`
        : '120px';
      textContainer.classList.toggle(classes.maxHeightTextContainer);
  });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScript);
} else {
    initScript();
}
