const colorSwitch = document.querySelectorAll('.color-switch');
let whiteMode = localStorage.getItem('whiteMode')

const whiteModeOn =() =>{
    document.body.classList.add('white-mode');
    localStorage.setItem('whiteMode', 'enabled')

}

const darkModeOn = () =>{
     document.body.classList.remove('white-mode');
     localStorage.setItem('whiteMode', null)
}

if(whiteMode === "enabled"){
    whiteModeOn();
    colorSwitch.forEach(switchs => {
        switchs.classList.add('bulb')
    })
}

for (const switchs of colorSwitch) {
    switchs.addEventListener('click', ()=>{
        whiteMode = localStorage.getItem('whiteMode');
    
        if(whiteMode !== "enabled"){
            switchs.classList.add('bulb')
            whiteModeOn()
    }
     else{
        darkModeOn()
            switchs.classList.remove('bulb')
     }
    
    })
}
    

// toggle the menu side bar
let navigation = document.querySelector('.sidebar')

function toggleMenu(){
    navigation.style.left = "0"
}

function untoggleMenu(){
    navigation.style.left = "-260px"
}



// page scrolling progress bar

document.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var scrollBottom = document.body.scrollHeight - document.documentElement.clientHeight
    var scrolled = (scrollTop / scrollBottom) * 100 
    document.querySelector("#myBar").style.width = scrolled + "%";
}


