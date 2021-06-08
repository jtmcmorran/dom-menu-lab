//task 3.0
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

//task 1.0
const mainEl = document.querySelector('main');

//task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

//task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//task 1.3
mainEl.classList.add('flex-ctr');

 //task 2.0
const topMenuEl = document.getElementById('top-menu');

//task 2.1
topMenuEl.style.height = '100%';

//task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//task 2.3
topMenuEl.classList.add('flex-around');

//task 3.1
menuLinks.forEach((link, i) => {
  const a = document.createElement('a');
  a.href = link.href;
  a.innerHTML = link.text;
  topMenuEl.appendChild(a);
});

//task 4.0
const subMenuEl = document.getElementById('sub-menu');

//task 4.1
subMenuEl.style.height = '100%';

//task 4.2
subMenuEl.style.backgroundColor ='var(--sub-menu-bg)';

//task 4.3
subMenuEl.classList.add('flex-around');

//task 4.4
subMenuEl.style.position = 'absolute';

//task 4.5
subMenuEl.style.top = '0';
