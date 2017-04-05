'user strict';

angular.module('app').directive('appSendHeader', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/sendhead.html',
		link:function($scope){
			$scope.back=function(){
				window.history.back();
			}
		}
	};
}])