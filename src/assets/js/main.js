import { startLoader } from '../components/loader.js';
import { setupDropdownMenu } from '../components/dropdownMenu.js';
import { scrollNavigation, nextPage, previousPage, hideAndShowArrows, pageWidth, posLeft, maxWidth } from '../components/horizontalScroll.js';

startLoader();
setupDropdownMenu();

document.addEventListener('DOMContentLoaded', () => {
    scrollNavigation();
    nextPage();
    previousPage();
    hideAndShowArrows();
    pageWidth();
    posLeft();
    maxWidth();
});
