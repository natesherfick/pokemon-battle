
let UserHP = 100;
let EnemyHP = 100;

let UserAttack = 10;
let EnemyAttack = 10;

let text = document.getElementById("action-text")

function AttackScratch(){
EnemyHP = EnemyHP-UserAttack;
if(EnemyHP <= UserAttack){
  EnemyHP = 0
}
hideButtons()
text.innerHTML = "CHARMANDER used scratch!"
setTimeout(draw, 2000)
//draw()

if (EnemyHP <= 0){SquirtleFainted()}
else {EnemyAttackChoice()}
}



function AttackGrowl(){
UserAttack = UserAttack*1.5

EnemyAttackChoice()
}



function EnemyAttackChoice(){
let chance = Math.random()
if (chance > 0.5){
  EnemyAttackTackle()
}
else {EnemyAttackTailWhip()}
}



function EnemyAttackTackle(){
UserHP = UserHP-EnemyAttack
if(UserHP <= EnemyAttack){
  UserHP = 0
}

//draw()

if (UserHP <= 0){CharmanderFainted()}
}



function EnemyAttackTailWhip(){
EnemyAttack = EnemyAttack*1.5
}



function CharmanderFainted(){

}



function SquirtleFainted(){

}


function hideButtons(){

}


function draw(){
document.getElementById("enemy-bar").style.width= `${EnemyHP}%` 

document.getElementById("user-bar").style.width= `${UserHP}%` 
}