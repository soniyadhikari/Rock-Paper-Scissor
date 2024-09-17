let userScore=document.querySelector("#score1");
let comScore=document.querySelector("#score2");
let arr=document.querySelectorAll(".class");
arr.forEach(( val)=>{
    val.addEventListener("click",()=>{
    let player=val.getAttribute("id");
    console.log(player);
    let comp= computer();
    if (player!==comp){
        if(judge(player, comp)){
            userScore.innerHTML="1";
         Win("You");
        }
        else{
            comScore.innerHTML="1";
         Win("Bot");
        }
    }
    else draw();
    });
});

const computer=()=>{
    let bot=document.createElement("p");
    let hand=["rock", "paper", "scissor"];
    let botSelect=hand[Math.floor(Math.random()*3)];
    bot.innerHTML="Bot choose " + botSelect;
    bot.setAttribute("id","bot");
    document.querySelector(".bot").append(bot);
    console.log(botSelect);
     return botSelect;
}

const judge=(str1, str2)=>{
    if((str1==="rock" && str2==="paper")||(str1==="paper" && str2==="scissor")||(str1==="scissor" && str2==="rock")) 
    return 0;
    else
    return 1;
}
const draw=()=>{
    arr.forEach(( val)=>{
        val.style.pointerEvents = "none";
    });
    let winMsg= document.createElement("div");
    winMsg.setAttribute("id","winmsg");
    winMsg.innerHTML="Draw"; 
    document.querySelector(".win").append(winMsg);
    onclick();
}
const Win=(str)=>{
    arr.forEach(( val)=>{
        val.style.pointerEvents = "none";
    });
  let winMsg= document.createElement("div");
  winMsg.setAttribute("id","winmsg");
  winMsg.innerHTML=str+" won."; 
  document.querySelector(".win").append(winMsg);
  onclick();
}
const onclick=()=>{
    let msg=document.querySelector("#msg");
    msg.innerHTML="Play Again";
    msg.addEventListener("click", ()=>{
        arr.forEach(( val)=>{
            val.style.pointerEvents = "auto";
        });
        msg.innerHTML="Play your move";
        let winMsg= document.querySelector("#winmsg");
        winMsg.remove();
        let bot=document.querySelector("#bot");
        bot.remove();
        userScore.innerHTML="0";
        comScore.innerHTML="0";
    });
}


































