
app.controller("changeCtrl", [
    "$scope",
    "myService",
    function($scope,myService) {
        myService.getEvenInfo().then(
            function(response) {
                $scope.data = response.data.InboxMailList;
                console.log($scope.data.length,'$scope.data.length');
                console.log($scope)
                $scope.counter = 0;
                $scope.change = function() {
                    $scope.counter ++;
                    if($scope.counter==$scope.data.length){
                        $scope.confirmed = true;
                    }else{
                        $scope.confirmed = false;
                    }             
                };
              //true
            },
            function(response) {
              //false
                console.log("error");
            }
        );
    }
]);
