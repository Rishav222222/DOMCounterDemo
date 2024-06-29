
let taskBtn = document.getElementById('addTask');
let toDoContainer = document.getElementById('todo');


let count = 1
taskBtn.addEventListener("click", ()=>{
    
    let card = document.createElement('div');
    card.setAttribute("class", "card");
    card.setAttribute("id", `card-${count++}`);
    card.setAttribute("contenteditable", true)
    card.setAttribute("draggable", true);
    card.innerHTML = "Default Card"
    toDoContainer.append(card);


    card.addEventListener("click", (events)=>{
    
       if(card.innerHTML === "Default Card"){
                card.innerHTML = "";
       }
    })


    card.addEventListener("blur", ()=>{
         
        if(card.innerHTML === ""){
            card.remove();
        }
    })

    card.addEventListener("dragstart", (event)=>{
        let selectedCardId = event.target.id;
        event.dataTransfer.setData("text", selectedCardId);
        card.style.opacity = 0.2;
    })


    card.addEventListener("dragend", ()=>{
        console.log("drag ended")
        card.style.opacity = 1;
    })

    let dragEvents = ['dragover', 'dragenter', 'drop']; 

    dragEvents.forEach((value)=>{
       let cols = document.getElementsByClassName('column');

       for(let t of cols){
        t.addEventListener(value, (event)=>{
             event.preventDefault();

                if(value == "drop"){
                     let selectedCardId = event.dataTransfer.getData("text"); // id
                     let selectedCard = document.getElementById(selectedCardId); // 
                     t.append(selectedCard);
                }


        })

       }
    })
})