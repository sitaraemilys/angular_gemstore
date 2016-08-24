
(function() {
  var app = angular.module("gemStore", ["storeProduct"]);

  app.controller('StoreController', [ "$http", function($http){
    var store = this;
    store.products = [];

    $http.get('https://raw.githubusercontent.com/suryatech/codeschool-shaping-up-with-angular/master/store-products.json').success(function(data){
      store.products = data;
    });

  }]);

app.controller('ReviewController', function(){
  this.review = {};

  this.addReview = function(product){
    this.review.createdOn = Date.now();
    product.reviews.push(this.review);
    this.review = {};
  };
});

})();
