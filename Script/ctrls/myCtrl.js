
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
    this.Selected= false;
    // this.Selected = 0;
    this.change = function(){
      self.count=0;
      for(i=0;i<self.data.length;i++){
        // console.log(self.data,'self.data[i]')
        if(self.data[i].Selected ==true){
          console.log(self.data[i].count,' self.data[i].count');
          self.count++
        console.log(self.count,'self.count++')
        if(self.count==self.data.length){
          this.Selected= true;
        }else {
          this.Selected= false;
        }
        }
      }
    };
    this.changeTitle = function(){
      if(this.Selected == true){
        for(i=0;i<self.data.length;i++){
          // console.log(self.data,'self.data[i]')
          self.data[i].Selected = true;  
        }
      }else{
        for(i=0;i<self.data.length;i++){
          // console.log(self.data,'self.data[i]')
          self.data[i].Selected = false;  
        }
      }
    }
  }
]);
