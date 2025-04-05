function getValue(row, column)
{
	return row.getElementsByTagName("td")[column].getElementsByTagName("input")[0].value;
}

function setValue(row, column, value)
{
	row.getElementsByTagName("td")[column].getElementsByTagName("input")[0].value = value;
}