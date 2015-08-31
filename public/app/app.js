angular.Module('app',[]);
angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [{
        title: 'Sales Person',
        description: 'ull fight'
    }, {
        title: 'Accountant',
        description:'ull use keyboard'
    }];
});
