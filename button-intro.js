let x = document.querySelectorAll(".btn-more");
for (let i = 0; i < x.length; i++) {
  document.querySelectorAll(".btn-more")[i].onclick = () => {
    document
      .querySelectorAll("span.specification")
      [i].classList.toggle("hidden");
    document.querySelectorAll(".btn-more")[i].textContent =
      document.querySelectorAll(".btn-more")[i].textContent == "Thu gọn"
        ? "Xem thêm"
        : "Thu gọn";
  };
}
