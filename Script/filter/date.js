app.filter('date',function () {
    console.log('123')
    return function (date) {
        // console.log(date,'index data')
        // console.log(typeof(date))
        // console.log(moment({date}),'moment(obj)')
        // console.log(moment({date})._i.date.split("/Date("),'moment(obj)_i.date')
        a = moment({date})._i.date.split("/Date(");
        b = a[1].split(")/");
        c = b[0];
        // console.log(c,'c')
        d =  moment(c)._i;
        //console.log(moment(c)._i,'moment(c)')
        console.log(d,'d')
        dataDate = Number(d)
        // console.log(dataDate,'dataDate')
        // console.log(typeof(dataDate),'typeof(dataDate)')
        var oDate = new Date(dataDate);
        // console.log(oDate,'oDate')
        oYear = oDate.getFullYear();
        // console.log(oYear,'oYear')
        oMonth = oDate.getMonth()+1;
        // console.log(oMonth,'oMonths')
        oDay = oDate.getDate();
        // console.log(oDay,'oDay')
        oTime = oYear + '/' + oMonth + '/' + oDay;
        console.log(oTime,'oTime');
        return oTime;
    };
});