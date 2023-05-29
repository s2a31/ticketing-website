let adults = document.querySelector('#adults');
let children = document.querySelector('#children');
let btn = document.querySelector('#buyBtn');

let conf = document.querySelector('#confirmation');
let cancel = document.querySelector('.cancel');
let title = document.querySelector('.title');
let tickets = document.querySelector('.tickets');

btn.addEventListener('click', function (event) {
  let adValue = adults.value;
  let chValue = children.value;
  if (adValue <= 0) {
    adValue = 0;
  }
  if (chValue <= 0) {
    chValue = 0;
  }

  let price = calc(adValue, chValue);
  title.innerHTML = `The price is \$${price}.`;

  printing(adValue, 'Adult');
  printing(chValue, 'Child');
  conf.style.display = 'block';
});

cancel.addEventListener('click', function (event) {
  adults.value = '';
  children.value = '';
  conf.style.display = 'none';
  let removeLis = tickets.getElementsByClassName('ticket');
  // Convert the HTMLCollection to an Array
  let lisArray = Array.from(removeLis);
  lisArray.forEach((li) => {
    li.remove();
  });
});

function calc(adults, children) {
  return adults * 12 + children * 5;
}

function printing(nr, kind) {
  for (let i = 1; i <= nr; i++) {
    let li = document.createElement('li');
    li.innerHTML = `${kind} Ticket #${i}`;
    li.classList.add('ticket');
    tickets.appendChild(li);
  }
}
