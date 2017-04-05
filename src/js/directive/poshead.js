'user strict';

angular.module('app').directive('appPositionHead', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/poshead.html',
		link:function($scope){
			$scope.back=function(){
				window.history.back();
			}
		}
	};
}])