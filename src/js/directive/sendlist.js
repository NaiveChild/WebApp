'user strict';

angular.module('app').directive('appSendList', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/sendlist.html'
	};
}])