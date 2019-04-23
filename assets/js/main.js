document.addEventListener('DOMContentLoaded', () => {
  const pageId = document.getElementsByTagName('body')[0];
  const footerTags = document.querySelectorAll('footer > a div');

  for (i = 0; i < footerTags.length; i++ ) {
    if (footerTags[i].className === pageId.id) {
      footerTags[i].classList.add('active');
    }
  }
});