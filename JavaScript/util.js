function strcmp(a, b)
{
	if (a > b) return 1;
	if (a < b) return -1;
	return 0;
}

function isnum(ch)
{
	return "0" <= ch && ch <= "9";
}

var NL = "\r\n";
