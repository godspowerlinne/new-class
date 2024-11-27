const body = document.body;
// header 
const myHeader = document.createElement('header');
myHeader.style.backgroundColor = '#68D58532';
// nav 
const myNav = document.createElement('nav');
myNav.style.display = 'flex';
myNav.style.justifyContent = 'space-between';
myNav.style.alignItems = 'center';
myNav.style.padding = '20px';

// logo
const mySpan = document.createElement('span');
mySpan.textContent = 'brainwave.io';
mySpan.style.fontSize = '28px';
mySpan.style.fontWeight = 'bold';
mySpan.style.color = 'black';
mySpan.style.textTransform = 'capitalize';
mySpan.style.color = '#1111bb';
mySpan.style.cursor = 'pointer';
mySpan.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.4)";

// navlist
const myNavlist = document.createElement('ul');
myNavlist.style.display = 'flex';
myNavlist.style.gap = '60px';
myNavlist.classList.add('navlinks');

// navlist items
const myNavli1 = document.createElement('li');
myNavli1.textContent = 'Demo';
myNavli1.classList.add('myNavli1');
const myNavli2 = document.createElement('li');
myNavli2.textContent = 'Pages';
const myNavli3 = document.createElement('li');
myNavli3.textContent = 'Support';
const myNavli4 = document.createElement('li');
myNavli4.textContent = 'Contact';

// navlist button
const myNavbtn = document.createElement('div');
myNavbtn.style.display = 'flex';
myNavbtn.style.gap = '40px';
myNavbtn.style.fontWeight = '500';
const myNavbtn1 = document.createElement('button');
const myNavbtn2 = document.createElement('button');
myNavbtn1.textContent = 'Login';
myNavbtn1.classList.add('buttons');
myNavbtn2.textContent = 'Sign Up';
myNavbtn2.classList.add('buttons');

// hero section 
const myHero = document.createElement('section');
myHero.style.padding = '8rem';
myHero.style.width = '80%';

// first div 
const myHeroDiv1 = document.createElement('div');
// h1 tag 
const myHeroDiv1H1 = document.createElement('h1');
myHeroDiv1H1.textContent = 'Find a dream job that changes life.';
myHeroDiv1H1.style.width = '65%';
myHeroDiv1H1.style.fontSize = '60px';
myHeroDiv1H1.style.lineHeight = '65px';
myHeroDiv1H1.style.letterSpacing = '-2px';
myHeroDiv1H1.style.fontWeight = '500';
myHeroDiv1H1.style.color = '#161C2D';
// p tag 
const myHeroDivP = document.createElement('p');
myHeroDivP.textContent = 'With lots of unique blocks, you can easily build a page without coding. Build your next job website.';
myHeroDivP.style.width = '65%';
myHeroDivP.style.fontSize = '19px';
myHeroDivP.style.lineHeight = '34px';
myHeroDivP.style.letterSpacing = '0.2px';
myHeroDivP.style.marginBlock = '2rem';
myHeroDivP.style.color = '#161C2D';
myHeroDivP.style.opacity = '0.7';


// second div
const myHeroDiv2 = document.createElement('div');
// form 
const myHeroDiv2Form = document.createElement('form');
myHeroDiv2Form.style.display = 'flex';
myHeroDiv2Form.style.gap = '10px';
myHeroDiv2Form.style.alignItems = 'center';
myHeroDiv2Form.style.backgroundColor = '#4700ff';
myHeroDiv2Form.style.borderRadius = '10px';
myHeroDiv2Form.style.padding = '20px';
myHeroDiv2Form.style.height = '90px'

// form inputs one
const myHeroDiv2Forminput1 = document.createElement('input');
myHeroDiv2Forminput1.placeholder = 'Job title or keyword';
myHeroDiv2Forminput1.style.padding = '10px';
myHeroDiv2Forminput1.style.paddingInline = '20px';
myHeroDiv2Forminput1.style.width = '270px';
myHeroDiv2Forminput1.style.borderRadius = '5px';
myHeroDiv2Forminput1.style.backgroundColor = '#ffffff';

// form inputs two
const myHeroDiv2Forminput2 = document.createElement('input');
myHeroDiv2Forminput2.placeholder = 'City';
myHeroDiv2Forminput2.style.padding = '10px';
myHeroDiv2Forminput2.style.paddingInline = '20px';
myHeroDiv2Forminput2.style.width = '270px';
myHeroDiv2Forminput2.style.borderRadius = '5px';
myHeroDiv2Forminput2.style.backgroundColor = '#ffffff';

// form button
const myHeroDiv2Formbtn = document.createElement('button');
myHeroDiv2Formbtn.textContent = 'Search';
myHeroDiv2Formbtn.style.backgroundColor = '#000';
myHeroDiv2Formbtn.style.width = '150px';
myHeroDiv2Formbtn.style.paddingBlock = '10px';
myHeroDiv2Formbtn.style.paddingInline = '30px';
myHeroDiv2Formbtn.style.color = 'white';
myHeroDiv2Formbtn.style.borderRadius = '5px';

// hero div2 p tag 
const myHeroDiv2P2 = document.createElement('p');
myHeroDiv2P2.textContent = 'Try Product Designer, Software Engineer etc.'
myHeroDiv2P2.style.width = '65%';
myHeroDiv2P2.style.fontSize = '15px';
myHeroDiv2P2.style.lineHeight = '34px';
myHeroDiv2P2.style.letterSpacing = '0.2px';
myHeroDiv2P2.style.marginTop = '1rem';
myHeroDiv2P2.style.color = '#161C2D';
myHeroDiv2P2.style.opacity = '0.7';

// main section 
const myMain = document.createElement('main');

// first section
const mySection = document.createElement('section');

// first div
const mySecDiv1 = document.createElement('div');
const mySecDivH2 = document.createElement('h2');
const mySecDiv1P = document.createElement('p');

// second div
const mySecDiv2 = document.createElement('div');
const mySecDiv2Img = document.createElement('img');

// footer
const myFooter = document.createElement('footer');



// hero div2 form child
myHeroDiv2Form.append(myHeroDiv2Forminput1, myHeroDiv2Forminput2, myHeroDiv2Formbtn);

// hero div2 child
myHeroDiv2.append(myHeroDiv2Form, myHeroDiv2P2);

// hero div1 child 
myHeroDiv1.append(myHeroDiv1H1, myHeroDivP);

// hero child 
myHero.append(myHeroDiv1, myHeroDiv2);

// navbtn child
myNavbtn.append(myNavbtn1, myNavbtn2);

// navlist child
myNavlist.append(myNavli1, myNavli2, myNavli3, myNavli4);

// nav child 
myNav.append(mySpan, myNavlist, myNavbtn);

// header child 
myHeader.append(myNav, myHero);

// body child 
body.append(myHeader);
body.append(myMain);
body.append(myFooter);

