var a = parseInt(prompt("Digite o valor A"));
var b = parseInt(prompt("Digite o valor B"));
var c = parseInt(prompt("Digite o valor C"));

function delta (a,b,c) {
	return ((b*b) - 4 * a * c)
}

document.body.append(delta(a,b,c));