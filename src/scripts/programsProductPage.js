
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'kz'];
const urlParams = new URLSearchParams(location.search)
const id = urlParams.get('id');
const child = urlParams.get('child');
select.addEventListener('change', changeURLLanguage);

let hash = window.location.hash;
   hash = hash.substring(1);
   if(!allLang.includes(hash)) {

     location.href = window.location.pathname + `?id=${id}&child=${child}` + '#ru';
   }
function changeLanguage() {
   select.value = hash;
  for (let key in langArr){
     let elem = document.querySelector('.lng-' + key);
     if(elem){
        elem.innerHTML = langArr[key][hash];
     }
  }
}

function changeURLLanguage() {
   let lang = select.value;
   location.href = window.location.pathname + `?id=${id}&child=${child}` + '#' + lang;
   location.reload();
}

changeLanguage();

const productsContainer = document.getElementById('products-page');


const findSeviceChild = PROGRAMS_INFO.find(item => item.id === id).child
const findTargetChild = findSeviceChild.find(item => item.id === child).modalInfo;


const fullContainer = document.createElement('div');
fullContainer.className = 'full-container';
 
const image = document.createElement('img');
image.src = findTargetChild.img;

const textTitle = document.createElement('h2')
textTitle.className = 'text-title'
textTitle.textContent = findTargetChild.title[hash];

const cost = document.createElement('p');
cost.className = 'cost'
cost.textContent = findTargetChild.cost[hash];

const descriptionTitle = document.createElement('h2');
descriptionTitle.className = 'description-title'
descriptionTitle.textContent = findTargetChild.description[hash];

const horizontalRule = document.createElement('hr');

const descriptionText = document.createElement('h2');
descriptionText.className = 'description-text'
descriptionText.textContent = findTargetChild.text[hash];

const productLink = document.createElement('a');
productLink.href = findTargetChild.link[hash];
productLink.setAttribute("target", "_blank");

const productButton = document.createElement('button');
productButton.className = 'product-btn ';
productButton.textContent = findTargetChild.button[hash];
productLink.append(productButton);

fullContainer.append(image);
fullContainer.append(textTitle);
fullContainer.append(cost);
fullContainer.append(descriptionTitle)
fullContainer.append(horizontalRule);
fullContainer.append(descriptionText);
fullContainer.append(productLink);

productsContainer.append(fullContainer);

const headerNav = document.getElementById('header-nav');

const headerLogo = document.createElement('a');
headerLogo.className = 'header-logo';
headerLogo.href = `index.html#${hash}`;


const logoImg = document.createElement('img');
logoImg.src = './src/img/logo.svg'; 

headerLogo.append(logoImg)
headerNav.prepend(headerLogo)

const headerPortfolio = document.createElement('div');
headerPortfolio.className = 'header-portfolio';

const homeLink = document.createElement('a');
homeLink.className = 'lng-home';
homeLink.href = `index.html#${hash}`;
homeLink.textContent = { 'ru' : 'Главная', 'kz' : 'Басты бет', 'en' : 'Home' }[hash];

const portfolioLink = document.createElement('a');
portfolioLink.className = 'lng-proff';
portfolioLink.href = `portfolio.html#${hash}`;
portfolioLink.textContent = { 'ru' : 'Портфолио', 'kz' : 'Портфолио', 'en' : 'Portfolio' }[hash];

const serviceLink = document.createElement('a');
serviceLink.className = 'lng-course';
serviceLink.href = `services.html#${hash}`;
serviceLink.textContent = { 'ru' : 'Услуги', 'kz' : 'Қызметтер', 'en' : 'Services' }[hash];

const programsLink = document.createElement('a');
programsLink.className = 'lng-programs';
programsLink.href = `programs.html#${hash}`;
programsLink.textContent = { 'ru' : 'Программы', 'kz' : 'Бағдарламалар', 'en' : 'Programs' }[hash];

const contactsLink = document.createElement('a');
contactsLink.className = 'lng-contacts';
contactsLink.href = `contacts.html#${hash}`;
contactsLink.textContent = { 'ru' : 'Контакты', 'kz' : 'Байланыс', 'en' : 'Contacts' }[hash];

headerPortfolio.append(homeLink)
headerPortfolio.append(portfolioLink);
headerPortfolio.append(serviceLink);
headerPortfolio.append(programsLink);
headerPortfolio.append(contactsLink);

navbar.prepend(headerPortfolio)
const rightSide = document.getElementById('right-side')

const educationLink = document.createElement('a');
educationLink.className = 'lng-education';
educationLink.setAttribute("id", "education")
educationLink.href = `http://kz.edu.beaprofi.com`;
educationLink.setAttribute('target', '_blank')
educationLink.textContent = { 'ru' : 'Образование', 'kz' : 'Білім', 'en' : 'Education' }[hash];

const shopLink = document.createElement('a');
shopLink.className = 'lng-shop';
shopLink.href = `https://kz.yzumi.com/`;
shopLink.setAttribute('target', '_blank');
shopLink.textContent = { 'ru' : 'Магазин', 'kz' : 'Дүкен', 'en' : 'Store' }[hash];


rightSide.prepend(shopLink)
rightSide.prepend(educationLink)
const footerLinks = document.getElementById('footer-links');

const termsLink = document.createElement('a');
termsLink.className = 'footer-link';
termsLink.textContent = { 'ru' : 'Публичная офферта', 'kz' : 'Қоғамдық ұсыныс', 'en' : 'Public offer' }[hash];
termsLink.setAttribute('target', '_blank');

const lineBreak = document.createElement('br');

const confedLink = document.createElement('a');
confedLink.className = 'footer-link';
confedLink.textContent = { 'ru' : 'Пользовательское соглашение и политика конфиденциальности', 'kz' : 'Пайдаланушы келісімі және құпиялылық саясаты', 'en' : 'User Agreement and Privacy Policy' }[hash];
confedLink.setAttribute('target', '_blank');

footerLinks.append(termsLink)
footerLinks.append(lineBreak)
footerLinks.append(confedLink)

const footerLogoLink = document.getElementById('footer')
const logoLink = document.createElement('a')
logoLink.className = 'footer-logo';
logoLink.href = `index.html#${hash}`;

const footerLogoImg = document.createElement('img');
footerLogoImg.src = './src/img/logo.svg';

logoLink.append(footerLogoImg);
footerLogoLink.prepend(logoLink);


const menuBtn = document.querySelector('.header-burger');
const menu = document.querySelector('.header-portfolio');
const selectMenu = document.querySelector('.change-lang');
const rightSideMenu = document.querySelector('.lng-education');
const rightShop =  document.querySelector('.lng-shop');

const closeBtn = document.querySelector('.close-burger');
menuBtn.addEventListener('click', function(){
menu.classList.toggle('active');
rightSideMenu.classList.toggle('active')
rightShop.classList.toggle('active')
selectMenu.classList.toggle('active');
if (selectMenu.classList.contains('active')) {
   selectMenu.style.visibility = 'visible'
   closeBtn.style.display = 'block'
}

if (rightSideMenu.classList.contains('active')) {
   headerPortfolio.append(educationLink)
}

if (rightShop.classList.contains('active')) {
   headerPortfolio.append(shopLink)
}
})

closeBtn.addEventListener('click', function() {
closeBtn.style.display = 'none'
menu.classList.toggle('active');
rightSideMenu.classList.toggle('active')
rightShop.classList.toggle('active')
selectMenu.style.visibility = 'hidden'
selectMenu.classList.toggle('active');
})