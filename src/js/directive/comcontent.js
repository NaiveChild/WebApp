'user strict';

angular.module('app').directive('appCompanyContent', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/comcontent.html'
	};
}])