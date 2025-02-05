export const disableScroll = () => {
  // Get the current page scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // if any scroll is attempted,
  // set this to the previous value
  window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);
};

export const enableScroll = () => {
  window.onscroll = function () {};
};
