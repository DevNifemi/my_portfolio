const colorSwitch = document.getElementById('color-switch')
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
    colorSwitch.classList.add('bulb')
}

colorSwitch.addEventListener('click', ()=>{
    whiteMode = localStorage.getItem('whiteMode');
    if(whiteMode !== "enabled"){
    colorSwitch.classList.add('bulb')
    whiteModeOn()
}
else{
    darkModeOn()
    colorSwitch.classList.remove('bulb')

}
})
