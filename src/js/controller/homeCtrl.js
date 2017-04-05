'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('homeCtrl', ['$scope','$http','$cookies','$state', function($scope,$http,$cookies,$state){
	// $http({
	// 	method:'get',
	// 	url:'../data/positionList.json',
	// 	responseType:'json'
	// }).then(function(resp){
	// 	$scope.user=resp.data;
	// },function(resp){
	// 	console.log('请求失败：'+resp.status+','+resp.statusText);
	// });
	

	$scope.checkLog=function(){
		var user=$cookies.getObject('user');
		if($scope.phone==user.phone && $scope.pwd==user.pwd){
			$scope.checktxt='';
			$state.go('main');
			console.log($state);
		}else{
			$scope.checktxt='手机号或密码错误';
		}
	}

	
}]);