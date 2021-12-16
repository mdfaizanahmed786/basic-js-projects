console.log('This is modal project')

const modalContainer=document.querySelector('.modal-container')
const modalDisplay=document.querySelector('.modalDisplay')
const closeBtn=document.querySelector('.submitBtn')

const launch=()=>{
modalContainer.classList.add('modal-show')
modalDisplay.style.transform=`translateY(30%)`

}

closeBtn.addEventListener('click', function(){
    modalContainer.classList.remove('modal-show')
    modalDisplay.style.transform=`translateY(-90%)`
})