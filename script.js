const togbtn = document.getElementById('tgn');
const navlist = document.getElementById('nav-list');
console.log(navlist)
togbtn.addEventListener('click', () => {
   navlist.classList.toggle('open');

})




const productContainers = [...document.querySelectorAll('.Project-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

