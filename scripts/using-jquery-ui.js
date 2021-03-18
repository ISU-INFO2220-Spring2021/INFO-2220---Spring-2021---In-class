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

    $("#menu").menu({
    
    });

    $("select").selectmenu();

    $("#spinner").spinner({
        
    } );

    $("#button").button();
    $("#button-icon").button({
        icon: "ui-icon-gear",
        showLabel: false,
        
    });

    $("#dialog-link").click(function myfunction() {
        $("#dialog-message").dialog();
    });

    

    //$("#tabs").tabs({
    //    heightStyle: "auto"
    //});

    $("#tooltip").tooltip({
        position: { my: "left+15 bottom-35", at: "top center" }
    });

    $("#spinner").tooltip({
        position: { my: "left+100 top+20", at: "right top" }
    });

    $("input[type=radio]").checkboxradio();
    $("input[type=checkbox]").checkboxradio();
    $("#shadowBox").click(function () {
       // $(this).hide();
        $(this).hide({
            duration: 5000,
            easing: "swing"
        })
    });



});