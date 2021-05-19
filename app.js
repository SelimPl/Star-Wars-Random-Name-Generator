const name = document.querySelector(".name")
const height = document.querySelector(".height")
const mass = document.querySelector(".mass")

const btn = document.querySelector(".generate")

btn.addEventListener("click", function(){
    let number = (Math.floor(Math.random()*50+1))
    console.log(number);

   
    fetch(`https://swapi.dev/api/people/${number}/`)
    .then(response => response.json())
    .then(data => {
        
        name.innerText = data.name
        height.innerText = data.height
        mass.innerText = `${data.mass} kg`
        
        
    })

    

})



   // https://images.unsplash.com/photo-1478479474071-8a3014d422c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80