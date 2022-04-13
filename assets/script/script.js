const memoryCardArray=[
    {
        name:"bird",
        img:"assets/images/bird.png"
    },
    {
        name:"cat",
        img:"assets/images/cat-in-black-silhouette.png"
    },
    {
        name:"giraffe",
        img:"assets/images/giraffe.png"
    },
    {
        name:"penguin",
        img:"assets/images/penguin.png"
    },
    {
        name:"raccoon",
        img:"assets/images/raccoon.png"
    },
    {
        name:"puffer-fish",
        img:"assets/images/puffer-fish.png"
    },
    {
        name:"bird",
        img:"assets/images/bird.png"
    },
    {
        name:"cat",
        img:"assets/images/cat-in-black-silhouette.png"
    },
    {
        name:"giraffe",
        img:"assets/images/giraffe.png"
    },
    {
        name:"penguin",
        img:"assets/images/penguin.png"
    },
    {
        name:"raccoon",
        img:"assets/images/raccoon.png"
    },
    {
        name:"puffer-fish",
        img:"assets/images/puffer-fish.png"
    }
];  

memoryCardArray.sort(() => 0.5 - Math.random());

const grid=document.getElementById("grid");
let chosenCards=[];
let chosenCardID=[];
const cardSet=[];
const result=document.getElementById("score");

function createGrid(){
    for(let i=0;i<memoryCardArray.length;i++){
        const card=document.createElement('img');
        card.setAttribute("src","assets/images/rainbow.jpg");
        card.setAttribute("width","200px");
        card.setAttribute("border","1px solid black");
        card.addEventListener("click",flipCard);
        card.setAttribute("data-id",i);
        grid.appendChild(card);
    }
}
createGrid();

function flipCard(){
    const id=this.getAttribute("data-id");
    chosenCards.push(memoryCardArray[id].name);
    chosenCardID.push(id);
    this.setAttribute("src",memoryCardArray[id].img);
    if(chosenCards.length == 2){
        setTimeout(check,500);
    }
}

function check(){
    const cards=document.querySelectorAll("img");

    if(chosenCards[0] === chosenCards[1]){
        cards[chosenCardID[0]].setAttribute("src","assets/images/success.webp");
        cards[chosenCardID[1]].setAttribute("src","assets/images/success.webp");
        cards[chosenCardID[0]].removeEventListener('click',flipCard);
        cards[chosenCardID[1]].removeEventListener('click',flipCard);
        cardSet.push(chosenCards);
    }else{
        cards[chosenCardID[0]].setAttribute("src","assets/images/rainbow.jpg");
        cards[chosenCardID[1]].setAttribute("src","assets/images/rainbow.jpg");
    }
    result.innerHTML=cardSet.length;
    chosenCards=[];
    chosenCardID=[];

    if(cardSet.length==memoryCardArray.length/2){
        result.innerHTML="You Won"
    }
}
