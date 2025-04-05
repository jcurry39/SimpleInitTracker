function Roll()
{
	deleteEmptyRows();
	duplicateCounts();
	let rows = document.getElementById("TextBoxTable").rows;
	let numRows = rows.length;
	for (var i = 1; i < numRows; i++)
	{
    	let rolled = getValue(rows[i], ColumnNumbers.ROLLED);
    	if (!(rolled === ""))
    		continue;
    	let autoRoll = Math.floor(Math.random() * 20) + 1;
    	let bonus = getValue(rows[i], ColumnNumbers.BONUS) ?? 0;
    	let total = +autoRoll + +bonus;
    	setValue(rows[i], ColumnNumbers.ROLLED, total);
	}
	sortTable();
}

function sortTable()
{
	let sorting = true;
	let needSwitch;
	let currentInit;
	let nextInit;
	while(sorting)
	{
		sorting = false;
		rows = document.getElementById("TextBoxTable").rows;
		needSwitch = false;
		for (var i = 1; i < (rows.length - 1); i++)
		{
			currentInit = getValue(rows[i], ColumnNumbers.ROLLED);
			nextInit = getValue(rows[i + 1], ColumnNumbers.ROLLED);
			if(+currentInit < +nextInit)
			{
				needSwitch = true;
				break;
			}
		}
		if (needSwitch)
		{
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			sorting = true;
		}
	}
}

function duplicateCounts()
{
	let rows = document.getElementById("TextBoxTable").rows;
	let rowsToDuplicate = [];
	let rowsToDelete = [];
	for (let i = 1; i < rows.length; i++)
	{
    	let count = getValue(rows[i], ColumnNumbers.COUNT);
    	if (count === "" || count === "1")
    		continue;
    	rowsToDuplicate.push(rows[i]);
    	rowsToDelete.push(i)
	}
	rowsToDelete.slice().reverse().forEach(deleteRow)
	rowsToDuplicate.forEach(duplicateRow);
}

function duplicateRow(item)
{
	let name = getValue(item, ColumnNumbers.CREATURE);
	let bonus = getValue(item, ColumnNumbers.BONUS);
	let numberToCreate = getValue(item, ColumnNumbers.COUNT);
	for (var i = 1; i <= numberToCreate; i++)
	{
		var createdRow = AddNewRow();
		setValue(createdRow, ColumnNumbers.CREATURE, name + `(${i})`);
		setValue(createdRow, ColumnNumbers.BONUS, bonus);
		setValue(createdRow, ColumnNumbers.COUNT, "");
	}
}

function deleteRow(item)
{
	let table = document.getElementById("TextBoxTable");
	table.deleteRow(item ?? table.rows.length - 1);
}

function deleteEmptyRows()
{
	let rows = document.getElementById("TextBoxTable").rows;
	let rowsToDelete = [];
	for (let i = 1; i < rows.length; i++)
	{
    	let name = getValue(rows[i], ColumnNumbers.CREATURE);
    	if (name)
    		continue;
    	rowsToDelete.push(i)
	}
	rowsToDelete.slice().reverse().forEach(deleteRow)
}