
app.controller("myController", [
  "$http",
  "myService",
  function($http, myService) {
    // console.log(this,'the myCtrl this')
    var self= this;
    // console.log(self,'assign self to this')
    self.aa = 'aa'
    // console.log(self,'assign another key&value to self')
    // console.log(self,'Now the myCtrl have nothing&aa')
    myService.getEvenInfo().then(
      function(response) {
      // console.log(this,'the myService.sgetEvenInfo this');
        self.data = response.data.InboxMailList;//get the myCtrl this
        //true
        // console.log(self.data,'self.data,這個就變成myCtrl裏的{}');
      },
      function(response) {
        //false
        console.log("error");
      }
    );
  }
]);
