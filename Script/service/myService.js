app.factory("myService", [
    "$http",
    function($http) {
    // console.log($http, "outerhttp");
    var myServiceInstance = {
        //會固定的東西寫在service裏，因為拿到api後每個地方可能會做不同的事，所以把then拿出去寫
        getEvenInfo: function(self$http) {
        // console.log($http, "insidehttp");
        url = "https://next.json-generator.com/api/json/get/EJuTb6mO8";
        //function裏要return 才能丟出來給別人使用,否則就只是function裏執行的東西
            return $http({
                method: "GET",
                url: self.url
            });
        }
    };
    return myServiceInstance;
    }
]);
