'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('seaCtrl', ['$scope','$http', function($scope,$http){
	$http({
		method:'get',
		url:'data/city.json',
		responseType:'json'
	}).then(function(resp){
		$scope.city=resp.data;
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});


	$http({
		method:'get',
		url:'data/salary.json',
		responseType:'json'
	}).then(function(resp){
		$scope.salary=resp.data;
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});

	$http({
		method:'get',
		url:'data/scale.json',
		responseType:'json'
	}).then(function(resp){
		$scope.scale=resp.data;
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});

	$scope.flag1=true;
	$scope.flag2=true;
	$scope.flag3=true;
	$scope.flag4=true;
	$scope.showCity=function(){
		$scope.flag1=!$scope.flag1;
		$scope.flag2=!$scope.flag2;
		$scope.cla={
			"border-bottom":"2px solid #12d5b5"
		}
	}

	$scope.showSalary=function(){
		$scope.flag1=!$scope.flag1;
		$scope.flag3=!$scope.flag3;
		$scope.cla1={
			"border-bottom":"2px solid #12d5b5"
		}
	}

	$scope.showScale=function(){
		$scope.flag1=!$scope.flag1;
		$scope.flag4=!$scope.flag4;
		$scope.cla2={
			"border-bottom":"2px solid #12d5b5"
		}
	}

	$scope.hidesth=function(){
		$scope.flag1=true;
		$scope.flag2=true;
		$scope.flag3=true;
		$scope.flag4=true;
		$scope.cla={
			"border":"0"
		}
		$scope.cla1={
			"border":"0"
		}
		$scope.cla2={
			"border":"0"
		}
	}
}]);