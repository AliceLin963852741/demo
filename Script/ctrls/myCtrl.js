
app.controller('myController',['$http',function($http){
    console.log('111');
  var self = this;
  self.url='https://next.json-generator.com/api/json/get/EJuTb6mO8';
  $http({
    method:'GET',
    url:self.url,
  }).then(function(response){
    self.data = response.data.InboxMailList;
    //true
    console.log(self.data)
  },function(response){
    //false
    console.log("error");
  });
}]);