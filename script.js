function createDivs(n){
    var container = document.querySelector(".div-container");
    for (let i = 0; i < n; i++){
        var row = document.createElement("div");
        row.style.display = 'flex';
        row.style.flex = 1;
        row.classList.add("row");

        for (let j = 0; j < n; j++){
            var squareDiv = document.createElement("div");

            squareDiv.classList.add("box");
            squareDiv.style.width = "50px";
            squareDiv.style.height = "50px";
            squareDiv.style.border = "1px solid black";
            squareDiv.style.margin = "1px";

            row.appendChild(squareDiv);
        }
        container.appendChild(row);
    }
}


createDivs(16);