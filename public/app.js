const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn =  document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

// secBtn.forEach(i => {
//     i.addEventListener('click',()=> {
//         removeActiveClasses()
//         i.classList.add('active-btn')
//     })
//     })
//     function removeActiveClasses(){
//         secBtn.forEach(i =>{
//             i.classList.remove('active-btn')
//         })
//     }
//     document.querySelector(".active").classList.remove("active");
//     document.getElementById(button.dataset.id).classList.add("active")
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();