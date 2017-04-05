'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('colCtrl', ['$scope','$http','$cookies','$state', function($scope,$http,$cookies,$state){
	$http({
		method:'get',
		url:'data/myFavorite.json',
		responseType:'json'
	}).then(function(resp){
		$scope.cols=resp.data;
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});
	

	$scope.imgsrc='image/star-active.png';
	$scope.flag=true;
	var user=$cookies.getObject('user');
	if(user){
		$scope.flag=false;
	}

	$scope.doChange=function(){
		if($scope.imgsrc=='image/star-active.png'){
			$scope.imgsrc='image/star.png';
		}else {
			$scope.imgsrc='image/star-active.png';
		}
	}

	
}]);