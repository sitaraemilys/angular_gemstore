(function(){
  var app = angular.module("storeProduct", []);

  app.directive('productReview', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-review.html'
    };
  });

  app.directive('productTab', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-tab.html',
      controller: function(){
        this.tab = 1;

        this.setTab = function(number){
          this.tab = number;
        };

        this.isSet = function(tab){
          return this.tab == tab;
        };
      },
      controllerAs: 'tab'
    };
  });

})();
