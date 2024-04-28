function createDivs(n){
    var container = document.querySelector(".div-container");
    for (let i = 0; i < n; i++){
        var row = document.createElement("div");
        row.classList.add("row-" + (i+1));
        for (let j = 0; j < n; j++){
            var squareDiv = document.createElement("div");

            squareDiv.style.width = "25px";
            squareDiv.style.height = "25px";
            squareDiv.style.border = "4px solid red";
            squareDiv.style.display = 'inline-block';
            squareDiv.style.margin = '1px';







            row.appendChild(squareDiv);
        }
        container.appendChild(row);
    }
}


createDivs(16);