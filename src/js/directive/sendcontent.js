'user strict';

angular.module('app').directive('appSendContent', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/sendcontent.html'
	};
}])