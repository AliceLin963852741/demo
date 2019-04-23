app.filter("data",function () {
    console.log('123')
    var self = this;
    self.Dtime = new Date().getTime();
    // return function (jsonDate) {
    //     if (!jsonDate)
    //         return "";
    //     return moment(jsonDate).format('YYYY/MM/DD (dd) HH:mm:ss');
    // };
});