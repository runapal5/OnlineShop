'use strict';

/* Controllers */


function ProductController($scope, $http)  {
  $http.get('http://172.17.0.7:80/productlist/listProducts').success(function(data) {
            $scope.products = data;
        });  
}

function ProductDetailController($scope, $routeParams, $http){
    $http.get('http://172.17.0.7:80/productlist/product?productID=' + $routeParams.productID).success(function(data) {
      $scope.product = data;
    });
}

function UserProfileController($scope, $routeParams, $http, $rootScope){
    
    $rootScope.username = 'aziz';
    
    $http.get('http://172.17.0.7:80/productlist/addProductToBasket?username='+ $rootScope.username +'&productID=' + $routeParams.productID).success(function(data) {
      $scope.products = data;
    });
    
    $http.get('http://172.17.0.7:80/productlist/userDetails?username=' + $rootScope.username).success(function(data) {
      $scope.user = data;
    });
    
}

