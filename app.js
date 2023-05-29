let adults = document.querySelector('#adults');
let children = document.querySelector('#children');
let btn = document.querySelector('#buyBtn');

let conf = document.querySelector('#confirmation');
let cancel = document.querySelector('.cancel');
let title = document.querySelector('.title');
let tickets = document.querySelector('.tickets');
let bl = document.querySelector('.bluriing');

btn.addEventListener('click', function () {
  let adValue = adults.value;
  let chValue = children.value;
  if (adValue <= 0) {
    adValue = 0;
  }
  if (chValue <= 0) {
    chValue = 0;
  }

  let price = calc(adValue, chValue);
  title.innerHTML = `Total price is \$${price}.`;

  printing(adValue, 'Adult', 12);
  printing(chValue, 'Child', 5);
  conf.style.display = 'block';
  bl.classList.add('blur');
});

bl.addEventListener('click', resetPopup);
cancel.addEventListener('click', resetPopup);

function resetPopup() {
  adults.value = '';
  children.value = '';
  conf.style.display = 'none';
  bl.classList.remove('blur');
  let removeLis = tickets.getElementsByClassName('ticket');
  // Convert the HTMLCollection to an Array
  let lisArray = Array.from(removeLis);
  lisArray.forEach((li) => {
    li.remove();
  });
}

function calc(adults, children) {
  return adults * 12 + children * 5;
}

function printing(nr, kind, price) {
  for (let i = 1; i <= nr; i++) {
    let li = document.createElement('li');
    li.innerHTML = `${kind} Ticket \$${price} - ${i}`;
    li.classList.add('ticket');
    tickets.appendChild(li);
  }
}
