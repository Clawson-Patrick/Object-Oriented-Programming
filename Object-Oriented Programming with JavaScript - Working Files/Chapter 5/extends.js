Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
}

Function.prototype.extends = function(superclass) {
	this.prototype = Object.create(superclass.prototype);
	this.prototype.constructor = this;
}




