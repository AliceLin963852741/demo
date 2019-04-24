
app.directive('directiveTooltip', function(){
    return {
        restrict: 'A',
        link: function(scope,element,attrs){
            $(element).tooltip({
                title:attrs.settext,
                placement:'right'
            });
        }
        
    }
});