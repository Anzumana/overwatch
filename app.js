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
	$scope.data.squad["anzumana"].championpool= [
		{name:'Junkrat', playing:true,training:false, icon:'icon junkrat',highlight:'http://youtube.com',title:'Tire action'},
		{name:'Hanzo', playing:true,training:false, icon:'icon hanzo',highlight:'http://youtube.com',title:'simple geometry'},
		{name:'Phara', playing:true,training:false, icon:'icon phara',highlight:'http://youtube.com',title:'justice rains'},
		{name:'Lucio', playing:true,training:false, icon:'icon lucio',highlight:'http://youtube.com',title:'that save'},
		{name:'DVA', playing:true,training:false, icon:'icon dva',highlight:'http://youtube.com',title:'that save'},
		{name:'Genji', playing:false,training:false, icon:'icon genji',highlight:'http://youtube.com',title:'that save'},
		{name:'Tracer', playing:false,training:true, icon:'icon tracer',highlight:'http://youtube.com',title:'that save'},
		{name:'Winston', playing:false,training:true, icon:'icon winston',highlight:'http://youtube.com',title:'that save'},
		{name:'Soldier', playing:false,training:true, icon:'icon soldier',highlight:'http://youtube.com',title:'that save'},
	];
	$scope.data.squad["anzumana"].name="Senwyn";
	$scope.data.squad["jayjay"]={};
	$scope.data.squad["jayjay"].name="JayJayBiggie";
	$scope.data.squad["jayjay"].championpool={};
	$scope.data.squad["jayjay"].championpool= [
		{name:'McCree', playing:true,training:false, icon:'icon mccree',highlight:'http://youtube.com',title:'that save'},
		{name:'Zeniata', playing:true,training:false, icon:'icon zeniata',highlight:'http://youtube.com',title:'that save'},
		{name:'Soldier', playing:true,training:false, icon:'icon soldier',highlight:'http://youtube.com',title:'that save'},
		{name:'Reinhard', playing:true,training:false, icon:'icon reinhard',highlight:'http://youtube.com',title:'that save'}
	];
}]);
