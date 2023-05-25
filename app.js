const getElement = (id) => document.querySelector(id).value;
let btn = document.querySelector('#buyBtn');
btn.onclick = function () {
  let adults = getElement('#adults');
  let children = getElement('#children');
  let [oneA, oneC, moreA, moreC, oneT, moreT] = ['adult', 'child', 'adults', 'children', 'ticket', 'tickets'];
  if (adults <= 0) {
    adults = 0;
  }
  if (children <= 0) {
    children = 0;
  }
  let price = calc(adults, children);
  for (let i = 1; i <= adults; i++) {
    console.log(`Adult Ticket #${i}`);
  }
  for (let i = 1; i <= children; i++) {
    console.log(`Child Ticket #${i}`);
  }
  alert(`The price is \$${price}.`);
};

function calc(adults, children) {
  return adults * 12 + children * 5;
}
