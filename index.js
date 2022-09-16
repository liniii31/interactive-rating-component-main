let ratingDiv=document.getElementById("rating-div");
let thanksDiv=document.getElementById("thanks-div");
thanksDiv.style.display="none";
let ratingButton = document.getElementsByClassName('rate');
let submit = document.getElementsByClassName('button')[0];
let previous;
let selected;
for(rates of ratingButton){
    rates.addEventListener("click", function(e){
        if(previous!=undefined){
            previous.style.backgroundColor="rgb(59, 57, 57)";
            previous.style.color="hsl(217, 12%, 63%)";
        }
        e.target.style.backgroundColor="hsl(217, 12%, 63%)";
        e.target.style.color="white";
        selected=e.target.innerHTML;
        previous=e.target;
    });
}
submit.addEventListener("click",function(){
    ratingDiv.style.display="none";
    thanksDiv.style.display="block";
    let showRating= document.getElementById("show-rating");
    showRating.innerHTML="You selected "+selected+" out of 5"
})