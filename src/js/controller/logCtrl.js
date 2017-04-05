'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('logCtrl', ['$scope','$http','$cookies', function($scope,$http,$cookies){
	$http({
		method:'get',
		url:'data/login.json',
		responseType:'json'
	}).then(function(resp){
		$scope.results=resp.data;
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});
	
	$scope.flag1=false;
	$scope.flag2=true;
	var user=$cookies.getObject('user');
	if(user){
		$scope.flag1=true;
		$scope.flag2=false;
		$scope.name=user.phone;
	}


	$scope.doExit=function(){
		$cookies.remove('user');
	}
}]);