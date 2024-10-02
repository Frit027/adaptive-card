/**
 * Имена CSS-классов, используемых в скрипте
 */
const classes = {
    textContainer: 'text-container',
    text: 'text-container__text',
    maxHeightTextContainer: 'text-container_max-height',
    gradient: 'text-container_gradient',
    button: 'footer__more-text-button',
    arrow: 'footer__arrow',
    arrowUp: 'footer__arrow_up',
};

/**
 * Высота текста по умолчанию, чтобы отображались только его первые 5 строк
 */
const DEFAULT_MAX_TEXT_HEIGHT = 120;

/**
 * Основной скрипт страницы
 */
const initScript = () => {
    // Круглая кнопка для показа/скрытия текста
    const button = document.querySelector(`.${classes.button}`);

    // Стрелка внутри круглой кнопки
    const arrow = button.querySelector(`.${classes.arrow}`);

    // HTML-элемент, внутри которого находится другой HTML-элемент с текстом
    const textContainer = document.querySelector(`.${classes.textContainer}`);

    // HTML-элемент, содержащий текст
    const text = textContainer.querySelector(`.${classes.text}`);

    const handleShowHideText = () => {
        // Меняем класс, чтобы перевернуть стрелку
        arrow.classList.toggle(classes.arrowUp);

        // Убираем/добавляем градиент при раскрытии/скрытии текста
        textContainer.classList.toggle(classes.gradient);

        // Задаём максимальную высоту элемента, чтобы открытие/закрытие текста происходило корректно
        textContainer.style.maxHeight = textContainer.classList.contains(classes.maxHeightTextContainer)
            ? `${text.offsetHeight}px`
            : `${DEFAULT_MAX_TEXT_HEIGHT}px`;

        // Убираем/добавляем CSS-класс с макс. значением высоты
        textContainer.classList.toggle(classes.maxHeightTextContainer);
    };

    // Обработка клика по кнопке
    button.addEventListener('click', handleShowHideText);
};

/**
 * Точка входа скрипта
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScript);
} else {
    initScript();
}
