var a = 90;
var b = 22;
var c = 11;
if (a > b &&  a > c)// si no cumple a es menor a b
{
	console.log("Mayor: " , a)
}
if (b > a && b > c)
{
	console.log("Mayor: " , b)
}
else if(c > a && c > b)
{
	console.log("Mayor: " , c)
}
if (a < b &&  a < c)// si no cumple a es menor a b
{
	console.log("Menor: " , a)
}
if (b < a && b < c)
{
	console.log("Menor: " , b)
}
else 
{
	console.log("Menor: " , c)
}