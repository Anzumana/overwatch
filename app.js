/**
 * @ngdoc controller
 * @name checky.controller:TodoController
 * @description
 * Controller to enable interaction with our checklists
 */
var myApp = angular.module('myApp',[]);
myApp.controller('SquadCtrl', ['$scope', function TodoCtrl($scope) {
	$scope.data = {};
	$scope.data.squad={};
	$scope.data.squad["anzumana"]={};
	$scope.data.squad["jayjay"]={};
	$scope.data.squad["sauvrinn"]={};
	$scope.data.squad["lewcor"]={};
	$scope.data.squad["clowntown"]={};
	$scope.data.squad["kaiser"]={};
	$scope.data.squad["blaze"]={};
	$scope.data.squad["anzumana"].name="Senwyn#2415";
	$scope.data.squad["jayjay"].name="JayJayBiggie#2793";
	$scope.data.squad["sauvrinn"].name="Sauvrin#1244";
	$scope.data.squad["lewcor"].name="DukeofNuts#11761";
	$scope.data.squad["clowntown"].name="Myles#1857";
	$scope.data.squad["blaze"].name="Blaze#14341";
	$scope.data.squad["kaiser"].name="KaiserPodge#1914";

	$scope.data.squad["anzumana"].championpool= [
	{name:'tracer', playing:true,training:false, highlight:'http://youtube.com',title:'Tire action'},
	{name:'genji', playing:true,training:false, highlight:'http://youtube.com',title:'simple geometry'},
	{name:'winston', playing:true,training:false, highlight:'http://youtube.com',title:'justice rains'},
	{name:'lucio', playing:true,training:false, highlight:'http://youtube.com',title:'that save'}
	];
	$scope.data.squad["jayjay"].championpool= [
		{name:'zeniata', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'reinhard', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'soldier', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'mccree', playing:true,training:false, highlight:'http://youtube.com',title:'that save'}
	];
	$scope.data.squad["sauvrinn"].championpool= [
		{name:'anna', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'zarya', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'zeniata', playing:true,training:false, highlight:'http://youtube.com',title:'that save'}
	];
	$scope.data.squad["lewcor"].championpool= [
		{name:'dva', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'zarya', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'roadhog', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'zarya', playing:true,training:false, highlight:'http://youtube.com',title:'that save'}
	];
	$scope.data.squad["clowntown"].championpool= [
		{name:'mercy', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'zeniata', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'lucio', playing:true,training:false, highlight:'http://youtube.com',title:'that save'}
	];
	$scope.data.squad["blaze"].championpool= [
		{name:'soldier', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'genji', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'hanzo', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'phara', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'mccree', playing:true,training:false, highlight:'http://youtube.com',title:'that save'}
	];
	$scope.data.squad["kaiser"].championpool= [
		{name:'reinhard', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'winston', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'zeniata', playing:true,training:false, highlight:'http://youtube.com',title:'that save'}
	];
	$scope.test = function test(){
		console.log('OVERWATCH');
	}
}]);
