let img = document.querySelectorAll('.img')
console.log(img)

img.forEach(i=>{
    i.addEventListener('mouseenter', ()=>{
        removeActiveClasses()
        i.classList.add('active')
    })

    i.addEventListener('mouseleave', ()=>{
        img.forEach(i =>{
            i.classList.remove('active')
        })
    })
})

function removeActiveClasses(){
    img.forEach(i => {
        i.classList.remove('active');
    })
}