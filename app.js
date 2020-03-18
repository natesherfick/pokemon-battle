
let UserHP = 100;
let EnemyHP = 100

let UserAttack = 10;
let EnemyAttack = 10;


function AttackScratch(){
EnemyHP-UserAttack

draw()

if (EnemyHP <= 0){SquirtleFainted()}
else {EnemyAttackChoice()}
}



function AttackGrowl(){
UserAttack*1.5

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
UserHP-EnemyAttack

draw()

if (UserHP <= 0){CharmanderFainted()}
}



function EnemyAttackTailWhip(){
EnemyAttack*1.5
}



function CharmanderFainted(){

}



function SquirtleFainted(){

}



function draw(){
  document.getElementById("enemy-bar")
}