$(document).ready(function () {
    function addItem() {
        var text = $("#to-do-list-entry").val();
        if (text != undefined && text != "") {
            $("#list").append('<li class="list-item">' + '<input type="checkbox">' + '<span>' + text + '</span>' + '<i class="fa fa-trash-o" aria-hidden="true"></i>' + '</input></li>');
            $("#to-do-list-entry").val('');
        }
        else {
            alert('No to-do entered');
        }
    }
    
    $("#add").on("click", function () {
        addItem();
    });
    
    $("#to-do-list-entry").keypress(function (e) {
        if (e.keyCode == 13) {
            addItem();
        }
    });
    
    $("body").delegate(".delete", "click", function () {
        $(this).parent().remove();
    });
    
     $("body").delegate("input:checkbox", "click", function (e) {
        if (e.target.checked == true) {
            $(this).parent().addClass("mark");
        } else{
            $(this).parent().removeClass("mark");
        }
         
    });
});