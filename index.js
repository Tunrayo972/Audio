var click = document.querySelectorAll(".tone");


for(i=0;i<click.length;i++){
    click[i].addEventListener("click",function(){
        var btnTouch = this.textContent;
        sounds(btnTouch);
        document.querySelector(".currentM").textContent = this.title;
        this.classList.add("pressed")
        setTimeout(()=>{
            this.classList.remove("pressed");
        },100)
    });
    
}
//keyboard event
document.addEventListener("keydown",Do)
function Do(event){
    console.log(event.key)
    
    sounds(event.key);
    // document.querySelector(".currentM").textContent = this.title
    let key = event.key.toLowerCase();
    
    let activeButton = document.querySelector("."+key);
    if(activeButton){
        activeButton.classList.add("pressed");
        setTimeout(()=>{
            activeButton.classList.remove("pressed");
        },100);
        let currentM = document.querySelector(".currentM");
        // console.log(activeButton.title)
        currentM.textContent = activeButton.title;
        
    }
    
}


let currentVoice;
function sounds(event){
    
    if(currentVoice){
        currentVoice.pause();
    }

    switch (event) {
        case "a":
            currentVoice = new Audio('./sounds/badruTamam.mp3');
            currentVoice.play();
            break;
        case "s":
            currentVoice= new Audio('./sounds/cards.mp3');
            currentVoice.play(); 
            break;
        case "d":
            currentVoice = new Audio('./sounds/faith.mp3');
            currentVoice.play();
            break;
        case "f":
            currentVoice = new Audio('./sounds/God.mp3');
            currentVoice.play();
            break;
        case "t":
            currentVoice = new Audio('./sounds/littleOne.mp3');
            currentVoice.play();
            break;
        case "j":
            currentVoice = new Audio('./sounds/mursalu.mp3');
            currentVoice.play();

            break;
        case "k":
            currentVoice = new Audio('./sounds/OnlyGod.mp3');
            currentVoice.play();
            break;

        case "l":
            currentVoice = new Audio('./sounds/sunflower.mp3');
            currentVoice.play();
            break;

        case "o":
            currentVoice = new Audio('./sounds/umi.mp3');
            currentVoice.play();
            break;

        case "p":
            currentVoice= new Audio('./sounds/cards.mp3');
            currentVoice.play();

            break;

    
        default:
            break;
    }
}

const buttons = document.querySelectorAll(".tone");
const screenTip = document.querySelector(".screenTip");
buttons.forEach(button=>{
    button.addEventListener("mouseover",()=>{
    document.querySelector(".screenTip").style.display = "block";
        
        screenTip.textContent = button.getAttribute("title");
        console.log(button.getAttribute('title'));
    })
    button.addEventListener("mouseout",() =>{
        screenTip.textContent ="";
    })
})