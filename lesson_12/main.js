let PortfolioApp = angular.module('PortfolioApp', []);

PortfolioApp.controller('PortfolioCtrl', function PortfolioCtrl($scope) {
    console.log('Portfolio controller !');
    $scope.totalScills = 4;
});