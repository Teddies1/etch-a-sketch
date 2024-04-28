const createDivs = (n) => {
    var container = document.querySelector(".div-container");
    for (let i = 0; i < n; i++){
        var row = document.createElement("div");
        row.style.flex = 1;
        row.classList.add("row");

        for (let j = 0; j < n; j++){
            var squareDiv = document.createElement("div");

            squareDiv.classList.add("box");
            squareDiv.style.width = "20px";
            squareDiv.style.height = "20px";
            squareDiv.style.border = "1px solid black";
            squareDiv.style.gap = "1px";

            row.appendChild(squareDiv);
        }
        container.appendChild(row);
    }
}

const applyHover = () => {
    var boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
        });
    });
}

const applyErase = () => {
    var boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", (e) =>{
            e.target.style.backgroundColor = "white";
        })
    });
}
const promptValue = () => {
    while (true){
        var number = prompt("Enter a grid size less than 50: ");
        if (number <= 50){
            return number;
        }   
    }
}


const etchSketch = () => {
    var gridSize = promptValue();
    createDivs(gridSize);
    applyHover();
}

document.body.addEventListener("click", (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains("erase")){
        applyErase();
    }
    else if (e.target.classList.contains("draw")){
        applyHover();
    }
    else if (e.target.id.contains("reset")){
        var container = document.querySelector(".div-container");
        container.innerHTML = '';
        etchSketch();
    }
        
});

etchSketch();