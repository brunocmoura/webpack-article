import Table from "./table/Table.js";

let tableHeader = ['Name', 'Age'];
let tableData = [
    {
        'name': 'Bruno',
        'age': 33
    },
    {
        'name': 'Daniela',
        'age': 32
    }
];

let table = new Table(tableHeader, tableData).create();
console.log(table);
let app = document.querySelector('#app');

app.innerHTML = table;
