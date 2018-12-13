
$("#comm-menu").load("common/menu.html");
$("#comm-footer").load("common/footer.html");
$("#comm-header").load("common/header.html");
var url = window.location.href;
var uri = url.substr(url.lastIndexOf("/") +1);
window.onload =function () {
    $("#menu-left a").each(function(){
        href = $(this).attr("href");
        if(href.indexOf(uri) > -1){
            $(this).attr("style", "background: #eee; border-right: 2px solid #ccc;");
        }
    })
}