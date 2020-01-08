export default (text = "This is only a test") => {
  const element = document.createElement("p");

  element.innerHTML = text;

  return element;
};
