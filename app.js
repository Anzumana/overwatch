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
	$scope.data.squad["twix"]={};
	$scope.data.squad["anzumana"].name="Senwyn#2415";
	$scope.data.squad["jayjay"].name="JayJayBiggie#2793";
	$scope.data.squad["twix"].name="Twixman#2220";

	$scope.data.squad["anzumana"].championpool= [
	{name:'anna', playing:true,training:false, highlight:'http://youtube.com',title:'Tire action'},
	{name:'hanzo', playing:true,training:false, highlight:'http://youtube.com',title:'simple geometry'},
	{name:'phara', playing:true,training:false, highlight:'http://youtube.com',title:'justice rains'},
	{name:'lucio', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
	{name:'dva', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
	{name:'genji', playing:false,training:false, highlight:'http://youtube.com',title:'that save'},
	{name:'tracer', playing:false,training:true, highlight:'http://youtube.com',title:'that save'},
	{name:'winston', playing:false,training:true, highlight:'http://youtube.com',title:'that save'},
	{name:'soldier', playing:false,training:true, highlight:'http://youtube.com',title:'that save'},
	];
	$scope.data.squad["jayjay"].championpool= [
		{name:'mccree', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'zeniata', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'soldier', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'reinhard', playing:true,training:false, highlight:'http://youtube.com',title:'that save'}
	];
	$scope.data.squad["twix"].championpool= [
		{name:'mccree', playing:true,training:false, title:'that save'},
		{name:'zeniata', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'soldier', playing:true,training:false, highlight:'http://youtube.com',title:'that save'},
		{name:'reinhard', playing:true,training:false, highlight:'http://youtube.com',title:'that save'}
	];
}]);
