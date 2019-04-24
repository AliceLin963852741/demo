
app.directive('directiveTooltip', function(){
    return {
        restrict: 'E',
        template:'<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="{{data.Subject}}">{{data.Subject}}</button>',
        // <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="i am new text">i am new buttom</button>
        link:function(){
            $('[data-toggle="tooltip"]').tooltip();
        }
        
    }
});