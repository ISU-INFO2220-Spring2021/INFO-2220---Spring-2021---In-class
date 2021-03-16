$(document).ready(function () {
    $("h3").draggable();

    $("#divResizeMe").resizable();

    $(".ordered").sortable();

    $("#accordion").accordion({
        heightStyle: "auto",
        event: "mouseover"
    });

    var foods = [
        "MoMos",
        "Bread",
        "Pizza",
        "Chocolate",
        "Lasagna",
        "Chinese"
    ];

    $("#autocomplete").autocomplete({
        source : foods
    });

    $("#datepicker").datepicker();

});