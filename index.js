function addHistory(name, number, time) {
  const div = document.createElement("div");
  div.innerHTML = `<div  class="bg-[#fafafa] flex justify-between items-center my-3 py-1 px-2.5 rounded-lg ">
                    <div >
                        <h1 class="text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] text-[#111111]">${name}</h1>
                        <p class="text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] text-[#5c5c5c]">${number}</p>
                    </div>
                    <span>${time}</span>
                </div>`;

  document.getElementById("history-container").appendChild(div);
}

// heart_count_section
const heartBtns = document.getElementsByClassName("heart-btn");

for (const btn of heartBtns) {
  btn.addEventListener("click", function () {
    const heartCount = document.getElementById("heart-count");
    heartCount.innerText = Number(heartCount.innerText) + 1;
  });
}

// call feature
const callBtns = document.getElementsByClassName("call-btn");
for (const btn of callBtns) {
  btn.addEventListener("click", function () {
    const title = btn.parentNode.parentNode.children[1].children[0].innerText;
    const number = btn.parentNode.parentNode.children[2].children[0].innerText;
    const coinAmount = Number(
      document.getElementById("coin-counter").innerText
    );

    const time = new Date().toLocaleTimeString();
    if (coinAmount < 20) {
      alert("You don't have sufficient coin");
      return;
    } else {
      alert(title + " " + number + "...");
      document.getElementById("coin-counter").innerText = coinAmount - 20;
      addHistory(title, number, time);
    }
  });
}

// Copy feature
const copyBtns = document.getElementsByClassName("copy-btn");
for (const btn of copyBtns) {
  btn.addEventListener("click", function () {
    const number = btn.parentNode.parentNode.children[2].children[0].innerText;
    navigator.clipboard.writeText(number);
    const copyAmount = Number(
      document.getElementById("copy-counter").innerText
    );
    document.getElementById("copy-counter").innerText = copyAmount + 1;
    alert("Copied");
  });
}

// history-clear-feature
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-container").innerText = "";
});


// bar btn

document.getElementById("bar-btn").addEventListener("click", function () {
  const div = document.getElementById("count-btns");
  div.classList.remove("hidden");
  div.classList.add("absolute", "bg-white", "flex", "flex-col", "top-0", "left-0", "h-[250px]", "w-[200px]","py-4", "px-3");
  document.getElementById("cross-btn").classList.remove("hidden")
  document.getElementById("cross-btn").classList.add("block");
  document.getElementById("bar-btn").classList.remove("block");
  document.getElementById("bar-btn").classList.add("hidden");
})


// toggle
document.getElementById("cross-btn").addEventListener("click", function () {
  const div = document.getElementById("count-btns");
  
  div.classList.remove("absolute", "bg-white", "flex", "flex-col", "top-0", "left-0", "h-[250px]", "w-[200px]","py-4", "px-3");
  div.classList.add("hidden");
  
  document.getElementById("cross-btn").classList.remove("block");
  document.getElementById("cross-btn").classList.add("hidden")
  document.getElementById("bar-btn").classList.remove("hidden");
  document.getElementById("bar-btn").classList.add(" block");
})

