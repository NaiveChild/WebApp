'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('posCtrl', ['$scope','$http','$state', function($scope,$http,$state){
	$http({
		method:'get',
		url:'data/company.json?id='+$state.params.id,
		responseType:'json'
	}).then(function(resp){
		console.log(resp);
		$scope.btn1=resp.data.positionClass[0];
		$scope.btn2=resp.data.positionClass[1];
		$scope.js=resp.data.positionClass[0].positionList[0];
		$scope.yy=resp.data.positionClass[1].positionList[0];
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});


	$scope.flag1=false;
	$scope.flag2=true;

	$scope.doChange1=function(){
		if($scope.flag1){
			$scope.flag2=true;
		}
		$scope.flag1=false;
		$scope.obj1={
			"background-color": "#12d5b5",
			"color": "#fff"
		}
		$scope.obj2={
			"background-color": "#def8f5",
			"color": "#000"
		}
	}

	$scope.doChange2=function(){
		if($scope.flag2){
			$scope.flag1=true;
		}
		$scope.flag2=false;
		$scope.obj2={
			"background-color": "#12d5b5",
			"color": "#fff"
		}
		$scope.obj1={
			"background-color": "#def8f5",
			"color": "#000"
		}
	}
}]);