const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const links = document.querySelector('.links');
const overlay = document.querySelector('.overlay');

openBtn.addEventListener('click', function(){
    links.classList.toggle('show-links')
    overlay.style.display = 'block';
})

closeBtn.addEventListener('click', function(){
  links.classList.remove('show-links');
  overlay.style.display = 'none';

    // console.log(closeBtn);
})

const features = document.querySelector('.features');
const company = document.querySelector('.company');
const dropDownFeature = document.querySelector('.dropdown-feature');
const dropDownCompany = document.querySelector('.dropdown-company');
console.log(dropDownCompany);

features.addEventListener('mouseenter',function(){
  dropDownFeature.style.display = 'block'; 
})
features.addEventListener('mouseleave',function(){
  dropDownFeature.style.display = 'none';
  dropDownFeature.style.transitionDelay = '.5'
})
company.addEventListener('mouseenter',function(){
  dropDownCompany.style.display = 'block'; 
})
company.addEventListener('mouseleave',function(){
  dropDownCompany.style.display = 'none'; 'transition-delay: .5s';
})


// features.addEventListener('click',function(){
//   dropDownFeature.classList.toggle('show-dropdown')
// })
// features.addEventListener('click',function(){
//   dropDownFeature.style.display = 'none';
//   // dropDownFeature.style.transitionDelay = '.5'
// })

