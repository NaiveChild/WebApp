'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('regCtrl', ['$scope','$http','$cookies','$interval','$state', function($scope,$http,$cookies,$interval,$state){
	$scope.flag1=false;
	$scope.flag2=false;
	$scope.checkPhone=function(){
		var reg=/^1\d{10}$/;
		if(reg.test($scope.phone)){
			$scope.phonetxt='✅';
			$scope.flag1=true;
		}else{
			$scope.phonetxt='❌';
			$scope.flag1=false;
		}
	}

	$scope.checkPwd=function(){
		var reg=/^\w{6,14}$/;
		if(reg.test($scope.pwd)){
			$scope.pwdtxt='✅';
			$scope.flag2=true;
		}else{
			$scope.pwdtxt='❌';
			$scope.flag2=false;
		}
	}

	$scope.mestxt='发送短信';

	$scope.doClick=function(){
		$scope.mestxt=10;
		var timer=$interval(countdown,1000);
		$scope.codetxt=generateRandomCode();

		function countdown(){
			$scope.mestxt--;
			if($scope.mestxt===0){
				$interval.cancel(timer);
				$scope.mestxt='重新发送';
			}

		}
	}

	function generateRandomCode(){
		var str="";
		for(var i=1;i<=4;i++){
			var n=Math.floor(Math.random()*9);
			str+=n;
		}
		return str;
	}

	$scope.checkReg=function(){
		console.log(112);
		if($scope.flag1 && $scope.flag2){
			$cookies.putObject('user',{phone:$scope.phone,pwd:$scope.pwd,state:1});
			// $state.go('home');
			// console.log(111);
		}
	}

}]);