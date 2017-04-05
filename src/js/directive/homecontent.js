'user strict';

angular.module('app').directive('appHomeContent', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/homecontent.html'
	};
}])