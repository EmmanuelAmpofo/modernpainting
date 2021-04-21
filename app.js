var app = angular.module("PaintingApp",[]);
app.controller("PaintingController",function($scope){
    $scope.paintingCount = 0;
    $scope.paintings =[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
    ]

    $scope.previous = function(){
        $scope.paintingCount -= 1;
    }
    $scope.next = function(){
        $scope.paintingCount += 1;
    }
});