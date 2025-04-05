function GenHTML(cell, name)
{
	let id = name + "Row";
	cell.id = id + "td";
	cell.classList.add("TextBoxTableContent");
	return `\n<input id=${id} type=\"text\" placeholder=${name}>`;
} 


function AddNewRow()
{
	let table = document.getElementById("TextBoxTable");
	let row = table.insertRow(table.rows.length);
	let name = row.insertCell(ColumnNumbers.CREATURE);
	let bonus = row.insertCell(ColumnNumbers.BONUS);
	let count = row.insertCell(ColumnNumbers.COUNT);
	let rolled = row.insertCell(ColumnNumbers.ROLLED);
	name.innerHTML = GenHTML(name, ColumnNames.CREATURE);
	bonus.innerHTML = GenHTML(bonus, ColumnNames.BONUS);
	count.innerHTML = GenHTML(count, ColumnNames.COUNT);
	rolled.innerHTML = GenHTML(rolled, ColumnNames.ROLLED);
	return row;
}