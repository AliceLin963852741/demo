
app.controller("myController", [
  "$http",
  "myService",
  function($http, myService) {
    var self= this;
    console.log(self,'self')
    myService.getEvenInfo().then(
      function(response) {
        self.data = response.data.InboxMailList;
        for(i=0;i<self.data.length;i++){
            self.data[i].Selected = false;
            self.data[i].count = 0;
        }
        //true
      },
      function(response) {
        //false
        console.log("error");
      }
    );

    // this.Selected = 0;
    this.change = function(){
      for(i=0;i<self.data.length;i++){
        // console.log(self.data,'self.data[i]')
        if(self.data[i].Selected ==true){
          self.data[i].count ++
          // console.log(self.data[i].count,"this.Selected");
          if(self.data[i].count ==self.data.length){
            console.log('456')
          }
        }
      }
      
    }
  }
]);
