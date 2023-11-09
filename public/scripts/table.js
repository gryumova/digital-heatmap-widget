import { getColor, getImg, getNumberPercent } from './utils.js'

function ObjectToTable(data) {
    // преобразование столбцов в строки, и извлечение заголовков
    // return parse data in variable table
    const table = {headers: Object.keys(data), rows:[]};
    for (const row of table.headers) {
        let line = [row]
        // извлечение данных построчно data[row][header] = data[ETH][USD]
        for (const header of table.headers) {
            if (row == header) {
                line.push("")
            } else {
                line.push(data[row][header])
            }
        }
        table.rows.push(line)
    };
    return table
};


function renderHTMLTable(table) {
    // рендеринг таблицы
    // заголовок - это 0 строка
    // return body of table with data
    const tBody = document.createElement('table').createTBody();
    tBody.insertAdjacentHTML('afterbegin', `<tr id="header"><th><div></div></th>${
        table.headers.map(hdr => 
            `<th>
                <div class="coin">
                    ${getImg(hdr)}
                    <div class="number">
                        ${hdr}
                    </div>
                </div>
            </th>`).join('')
    }</tr>`);

    return tBody
};

function fillCells(table, tBody) {
    // строки со значениями
    for (const row of table.rows) {
        const tr = tBody.insertRow();
        tr.insertCell(0).outerHTML = `<th scope="row">
                                        <div class="coin">
                                            ${getImg(row[0])}
                                            <div class="number">
                                                ${row[0]}
                                            </div>
                                        </div>
                                    </th>`;
        row.slice(1).forEach(val => {
            tr.insertCell().textContent = getNumberPercent(val);
        });
    };
}

function fillTableColor() {
    // заполнение ячеек цветами в зависимости от значения
    [...document.querySelectorAll('td')].forEach((s, i) => {
        s.style.backgroundColor = getColor(s);
    });
}

function setTable(text) {
    const table = ObjectToTable(text);
    const tBody = renderHTMLTable(table);
    fillCells(table, tBody);
    document.body.appendChild(tBody.parentElement);
    fillTableColor();
}

function updateTable(data) {
    const table = ObjectToTable(data);
    console.log(table);
    
    var i = 0;
    const tr = Array.from(document.querySelectorAll("table tr"));
    console.log();
    tr.slice(1).forEach(tr => {
        var j = 1;
        Array.from(tr.querySelectorAll("td")).forEach(td => {
            td.innerHTML = getNumberPercent(table.rows[i][j]);
            j++;
        });
        i++;
    });
    fillTableColor();
};

export {ObjectToTable, renderHTMLTable, fillCells, fillTableColor, setTable, updateTable}