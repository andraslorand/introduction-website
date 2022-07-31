function API(){
    return <div className="main">
        <div id="people">
        <button id="bt" onClick={getPeople}>click for people from Star Wars</button>

    </div>

    <div id="multiple">
        <button onClick={getpeo}>Show multiple people</button>
    </div>
    </div>
}
const people=document.getElementById("people")
//const btn=people.querySelector("button")

const multi=document.getElementById("multiple")
//const btn2=multi.querySelector("button")

//btn.addEventListener("click",getPeople)
//btn2.addEventListener("click",getpeo)



function getpeo(){
    fetch(`https://swapi.dev/api/people/`)
    .then(data=>data.json())
    .then(d=>{fetch(d.next)})
    .then(dd=>console.log(dd))
}


function getPeople(){

    const random=Math.floor(Math.random()*25)+1
    console.log(random)
    fetch('https://swapi.dev/api/people/'+random )
    .then(data=>data.json()) //a fetch metodussal kerest adunk le a szervernek,az  pedig kuld nekunk egy valaszt. a valaszt at
    // kell alakitsuk json formatumba, hogy tudjunk dolgozni vele
    .then(d=> writePeople(d))
    //a jsonra kell meg egy then, azert hogy tudjuk kiiratni a consolera 
    //ez  egy object, ugy tudink vele dolgozni mint egy objecttel
    .catch(err=>console.log(err))

}

//ez jibb megoldas
function writePeople(x){
    console.log(x)
    const {name, mass, birth_year,eye_color}=x
   
    const persDiv=`
        <div>
            <h1>${name}</h2>
            <p>
            ${name} has a mass of ${mass}, was born in ${birth_year}. He or she or it got a ${eye_color} eye
            </p>
        </div>
    `
    people.insertAdjacentHTML("beforeend",persDiv)
}


/*
function writePeople(x){
    const {name, mass, birth_year,eye_color}=x
    const myPDiv=document.createElement("div")
    //azert csinaljuk egy plusz valtozoval, mert amikor az innerHTMLt hasznaljuk, akkor azzal toroljuk a chielded, ezert mindig krealunk egyet es az elpusztulhat 
    const persDiv=`
        
            <h1>${name}</h2>
            <p>
            ${name} has a mass of ${mass}, was born in ${birth_year}. He or she or it got a ${eye_color} eye
            </p>
        
    `
    myPDiv.innerHTML+=persDiv
    people.appendChild(myPDiv)
}
*/

export default API