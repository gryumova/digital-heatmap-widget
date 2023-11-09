import {  url } from './scripts/variables.js'
import { ajaxGet } from './scripts/ajax.js'
import { setTable, updateTable } from './scripts/table.js'

// получение данных с сервера и рендеринг таблицы
await fetch(url)
    .then(response => response.text())
    .then(text =>setTable(JSON.parse(text)))

// выделение столбца и строки при наведении на ячейку
$('tr').hover(
    function(){ 
        var t = parseInt($(this).index());
        if (t !== 0) $(this).addClass('hover_tr'); 
    },
    function(){ 
        var t = parseInt($(this).index());
        if (t !== 0) $(this).removeClass('hover_tr'); 
    }
);

$('td').hover(
    function() {
        var t = $(this).index();
        var elem = document.getElementById("header").childNodes[t];
        elem.classList.add("hover_th");

    },
    function() {
        var t = $(this).index();
        var elem = document.getElementById("header").childNodes[t];
        elem.classList.remove("hover_th");
    }
)

 
setInterval(() => {
    ajaxGet(url, updateTable);
}, "10000");
