'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('showCtrl', ['$scope','$http','$state','$cookies', function($scope,$http,$state,$cookies){
	$http({
		method:'get',
		url:'../data/position.json?id='+$state.params.id,
		responseType:'json'
	}).then(function(resp){
		$scope.details=resp.data;
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});

	$http({
		method:'get',
		url:'../data/company.json',
		responseType:'json'
	}).then(function(resp){
		$scope.company=resp.data;
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});

	$scope.imgsrc='../image/star.png';
	$scope.txt='投个简历';
	$scope.flag1=false;
	$scope.flag2=true;
	var user=$cookies.getObject('user');
	if(user){
		$scope.flag1=true;
		$scope.flag2=false;
	}

	$scope.doChange=function(){
		if($scope.imgsrc=='../image/star.png'){
			$scope.imgsrc='../image/star-active.png';
			$scope.txt='已投递';
		}else {
			$scope.imgsrc='../image/star.png';
			$scope.txt='投个简历';
		}
		
	}
}]);