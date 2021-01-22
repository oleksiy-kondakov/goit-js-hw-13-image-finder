function scroll() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  }, 3000);
}

export default scroll;