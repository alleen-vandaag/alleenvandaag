const boldWords = document.querySelectorAll("footer b");

boldWords.forEach(word => {
  word.addEventListener("mouseover", () => {
    word.classList.add("bounce");
    setTimeout(() => word.classList.remove("bounce"), 600);
  });
});