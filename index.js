var sent = ["New Offers", "Discounts", "Good Prices"];
var i = 0;
window.addEventListener("load", () => {
  setInterval(() => {
    document.getElementsByClassName("event")[0].innerText = sent[i % 3];
    i++;
  }, 2000);
});
