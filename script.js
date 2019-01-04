var foo = this

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(foo);
    
    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};

$('#title').followTo(200);
