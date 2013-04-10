function strcmp(a, b)
{
	if (a > b) return 1;
	if (a < b) return -1;
	return 0;
}

function isnum(s)
{
	for (var i = 0; i < s.length; i++)
		if (s[i] < "0" || s[i] > "9")
			return false;
	return true;
}

var NL = "\r\n";
