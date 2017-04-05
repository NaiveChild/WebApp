'user strict';

angular.module('app').directive('appCollectHeader', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/colhead.html',
		link:function($scope){
			$scope.back=function(){
				window.history.back();
			}
		}
	};
}])