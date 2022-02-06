const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBox)
checkBox()
function checkBox(){
    console.log(window.innerHeight)
    const trigger = window.innerHeight /10 * 6.56

    boxes.forEach(box1 => {
        const boxTop = box1.getBoundingClientRect().top;
        if(boxTop < trigger){
            box1.classList.add('show');
        }else{
            box1.classList.remove('show');
        }
    })
}
