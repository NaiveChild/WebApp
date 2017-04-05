'user strict';

angular.module('app').directive('appCollectContent', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/colcontent.html'
	};
}])