
app.directive('directiveTooltip', function(){
    return {
        restrict: 'E',
        // template:'<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="{{data.Subject}}">{{data.Subject}}</button>'
        template:'<button type="button" class="btn btn-default bgtn" >{{data.Subject}}<span class="bgtx">{{data.Subject}}</span></button>'
    }
});