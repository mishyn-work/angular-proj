(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
    $scope.lunchList = "";
    $scope.message = "";
    
    $scope.checkIfToMuchBtnClick = function () {
        const numberOfMeals = $scope.lunchList.split(',').filter((word) => word!='' && word!=' ').length;

        if (numberOfMeals === 0) {
            $scope.message = "Please enter data first";
        }

        else if (numberOfMeals < 4) {

            $scope.message = "Enjoy!";
        }

        else {
            $scope.message = "Too much!";
        }
    }
}
);
})()