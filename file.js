let coins = 100;
let heartCount = 0;
let copyCount = 0;

const coinCountEl = document.getElementById("coinCount");
const heartCountEl = document.getElementById("heartCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");

// Heart
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("heartBtn")) {
    heartCount++;
    heartCountEl.textContent = heartCount;
  }
});

// Copy
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("copyBtn")) {
    let card = e.target.closest("div").parentElement;
    let number = card.querySelector("p.text-2xl").textContent;
    navigator.clipboard.writeText(number);
    alert("Copied: " + number);
    copyCount++;
    copyCountEl.textContent = copyCount;
  }
});

// Call
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("callBtn")) {
    let card = e.target.closest("div").parentElement;
    let serviceName = card.querySelector("h2").textContent;
    let serviceNumber = card.querySelector("p.text-2xl").textContent;

    if (coins >= 10) {
      coins -= 10;
      coinCountEl.textContent = coins;
      alert(`Calling ${serviceName} (${serviceNumber})`);

      let time = new Date().toLocaleTimeString();
      let li = document.createElement("li");
      li.textContent = `${serviceName} - ${serviceNumber} (${time})`;
      historyList.appendChild(li);

    } else {
      alert("Not enough coins to make a call!");
    }
  }
});

// Clear History

document.getElementById("clearHistoryBtn").addEventListener("click", () => {
  historyList.innerHTML = "";
});

