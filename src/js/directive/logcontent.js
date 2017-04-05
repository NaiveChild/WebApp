'user strict';

angular.module('app').directive('appLoginContent', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/logcontent.html'
	};
}])