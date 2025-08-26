// heart_count_section
const heartBtns = document.getElementsByClassName("heart-btn");

for (const btn of heartBtns) {
  btn.addEventListener("click", function () {
    const heartCount = document.getElementById("heart-count");
    heartCount.innerText = Number(heartCount.innerText) + 1;
  });
}
