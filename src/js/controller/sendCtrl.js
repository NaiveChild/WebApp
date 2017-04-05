'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('sendCtrl', ['$scope','$http','$cookies','$state', function($scope,$http,$cookies,$state){
	$http({
		method:'get',
		url:'data/myPost.json',
		responseType:'json'
	}).then(function(resp){
		console.log(resp);
		$scope.send=resp.data;
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});
	

	$scope.flag1=false;
	$scope.flag2=true;
	$scope.flag3=true;

	$scope.cla={
		"border-bottom":"2px solid #12d5b5"
	}
	$scope.showTotal=function(){
		$scope.flag1=false;
		$scope.flag2=true;
		$scope.flag3=true;
		$scope.cla={
			"border-bottom":"2px solid #12d5b5"
		}
		$scope.cla1={
			"border":"0"
		}
		$scope.cla2={
			"border":"0"
		}
	}

	$scope.showInt=function(){
		$scope.flag2=false;
		$scope.flag1=true;
		$scope.flag3=true;
		$scope.cla1={
			"border-bottom":"2px solid #12d5b5"
		}
		$scope.cla={
			"border":"0"
		}
		$scope.cla2={
			"border":"0"
		}
	}

	$scope.showIna=function(){
		$scope.flag3=false;
		$scope.flag1=true;
		$scope.flag2=true;
		$scope.cla2={
			"border-bottom":"2px solid #12d5b5"
		}
		$scope.cla={
			"border":"0"
		}
		$scope.cla1={
			"border":"0"
		}
	}


	
}]);