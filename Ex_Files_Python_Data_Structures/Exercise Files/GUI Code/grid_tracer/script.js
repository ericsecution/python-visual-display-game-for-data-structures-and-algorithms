var stampColor = 'black';
var board = document.getElementById( "grid" );
var gridSize = 4;


function setStampColor( stamp )
{
    stampColor = stamp;
}

function setCellColor( cell )
{
    cell.style.backgroundColor = stampColor;
}

html = "";
for ( var i = 0; i < gridSize; i++ ) {
    html += '<div class="row">';
    for ( var j = 0; j < gridSize; j++ ) {
        // Letters from "K"
//         var char = String.fromCharCode(75 + (i * gridSize + j));
//         html += `<div class="cell" onclick="setCellColor(this)">${char}</div>`;
        // Letters from "A"
//         var char = String.fromCharCode(65 + (i * gridSize + j));
//         html += `<div class="cell" onclick="setCellColor(this)">${char}</div>`;
        // (i, j) grid coordinates
         html += `<div class="cell" onclick="setCellColor(this)">(${i}, ${j})</div>`;
        // Blank cells
//         html += `<div class="cell" onclick="setCellColor(this)"></div>`;
    }
    html += '</div>';

}
board.innerHTML = html;


