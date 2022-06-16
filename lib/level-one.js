/*
 * DOTS: Level One
 *
 */
let score=0
const points=document.querySelector(".js-score")
const dots1=document.querySelector(".js-dot")
const body=document.querySelector('body')
const plus10=() =>{
    points.innerHTML=score += 10
check100()
}
const click= dots1.addEventListener('click',plus10) 
const check100 = () => {
if (score == 100){ 
    body.classList.add('game-over')
}
}