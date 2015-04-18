$(body).ready(function(event) {
    d = document.getElementById("movie_player");
    console.log(d.getCurrentTime());
    d.addEventListener("onStateChange", "onytplayerStateChange");
});

function onytplayerStateChange() {
    d = document.getElementById("movie_player");
    if (d.getDuration() == d.getCurrentTime()) {

    }
}
$(document.body).on('mouseover', function(event) {
    event.preventDefault();

    if ($(event.target).hasClass("content-wrapper")) {
        var selectedTag = 'selected';
        $('.'+selectedTag).removeClass(selectedTag).css('box-shadow', 'none');
        var $target = $(event.target).css('box-shadow', '0 0 0 4px rgba(255,100,0,.5)'); 
        $target.addClass(selectedTag); 
    }
});