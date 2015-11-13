var findRoot = function (a, b, c) {
	var a = a;
	var b = b;
	var c = c;
	var discr;
	var firstRoot;
	var secondRoot;

	if ( isNaN(a) || isNaN(b) || isNaN(c) ) {
		return ("Пожалуйста, введите числовые коэффициенты");
	};

	if ( a === 0 ) {
		if ( b != 0 ) {
			firstRoot = - ( c / b );
			return ("Уравнение линейно. Его единственный корень равен " + firstRoot);
		}
		else {
			if (c === 0) {
				return ("Все коэффициенты равны нулю. Корень уравнения может принимать любые значения");
			}
			else {
				return ("Уравнение не имеет решений");
			}
		};
	}

	discr = Math.pow(b,2) - ( 4 * a * c );

	if ( discr >= 0 ) {
		firstRoot = ( - b + Math.sqrt(discr)  )/( 2 * a);
		secondRoot = ( - b - Math.sqrt(discr) )/( 2 * a);

		if ( firstRoot === secondRoot ) {
			return ("Уравнение имеет один корень. Он равен " + firstRoot + ".");
		}
		else {
			return ("Уравнение имеет два корня. Первый равен " + firstRoot + "; второй равен " + secondRoot + ".");
		};
	}
	else {
		return ("Уравнение не имеет действительных корней");
	};
};

var getFactor = function (selector) {
	var factor = document.getElementById(selector).value;
	if ( factor.length === 0 ) {
		factor = 0;
	}
	return parseFloat(factor);
};

var display = function () {
	var countButton;
	var resultField;

	resultField = document.getElementById("js-result");
	countButton = document.getElementById("js-count");

	countButton.addEventListener('click', function() {
		resultField.innerHTML = findRoot( getFactor("js-first-factor"), getFactor("js-second-factor"), getFactor("js-third-factor") );
	}, false);
}

display();