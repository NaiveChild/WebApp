'user strict';

angular.module('app').directive('appPositionContent', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/poscontent.html'
	};
}])