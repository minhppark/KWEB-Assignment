const ellipse = {
	width: 10,
	height: 5,
	getArea : function getArea() {
		console.log(Math.PI * ellipse.width * ellipse.height)
	},
	getPerimeter : function getPerimeter() {
		console.log(2 * Math.PI * Math.sqrt((Math.pow(ellipse.width, 2) + Math.pow(ellipse.height, 2)) / 2))
	},
	getEccentricity : function getEccentricity() {
		console.log(Math.sqrt(1 - Math.pow((ellipse.height / ellipse.width), 2)))
	}
};

ellipse.getArea();
ellipse.getPerimeter();
ellipse.getEccentricity();