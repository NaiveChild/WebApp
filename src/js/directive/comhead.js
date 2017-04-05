'user strict';

angular.module('app').directive('appCompanyHead', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/comhead.html',
		link:function($scope){
			$scope.back=function(){
				window.history.back();
			}
		}
	};
}])