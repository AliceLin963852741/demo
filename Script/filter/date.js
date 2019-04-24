app.filter('date',function () {
    console.log('123')
    return function (date) {

        console.log(date,'index data')
    };
});