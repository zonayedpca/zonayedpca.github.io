function converter(num, divide) {
	this.num = num;
	this.divide = divide;
}

converter.prototype.numCon = function() {
	var rem;

	if(this.num <= 1) {
		var rem = this.num % this.divide;
		this.num = Math.trunc(this.num / this.divide);
		console.log('Result: ' + this.num + ' and Remaindar: ' + rem);
	}

	while(this.num > 1) {
		var rem = this.num % this.divide;
		this.num = Math.trunc(this.num / this.divide);
		console.log('Result: ' + this.num + ' and Remaindar: ' + rem);
	}
}

var calculator = function(event) {
	event.preventDefault();
	var num = document.querySelector('#num').value;
    var div = document.querySelector('#numSource').value
	var decToBi = new converter(num, div);
	decToBi.numCon();
}

document.querySelector('.btn-submit').addEventListener('click', function() {
	calculator(event);
});

document.addEventListener('keypress', function(event) {
	if(event.keyCode === 13) {
		calculator(event);
	}
});

