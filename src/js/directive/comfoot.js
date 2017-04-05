'user strict';

angular.module('app').directive('appCompanyFoot', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/comfoot.html'
	};
}])