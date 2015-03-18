(function(){


  var CustomersController = function($scope){

      $scope.sortBy = 'name';
      $scope.reverse = false;

      $scope.customers = [{joined:'2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9986},
                          {joined:'1965-08-20', name:'Alex', city:'Homer', orderTotal: 20.23},
                          {joined:'1997-07-29', name:'Bob', city:'Seattle', orderTotal: 105.23},
                          {joined:'2015-01-30', name:'Cathy', city:'Tampa', orderTotal: 34.5678}
                        ];

      $scope.doSort = function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
      };

  };


  CustomersController.$inject = ['$scope'];

  angular.module('customerApp')
         .controller('CustomersController', CustomersController);

})();
