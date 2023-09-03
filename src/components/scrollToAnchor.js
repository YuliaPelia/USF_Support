// scrollToAnchor.js
export function scrollToAnchor(anchorId) {
  const targetElement = document.getElementById(anchorId);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
}
