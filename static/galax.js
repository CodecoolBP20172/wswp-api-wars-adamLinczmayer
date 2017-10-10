
var $pageCounter = 1;
loadPage();

$("#next").click(function() {
    $pageCounter = ( $(this).attr('id') == 'next') ? $pageCounter + 1 : $pageCounter - 1;
    $("#items").empty();
    loadPage();
});


function loadPage() {
$(function(){
    var $items = $('#items');
    $.ajax({
       type: 'GET',
       url: "https://swapi.co/api/planets/?page=" + $pageCounter,
       success: function(items) {
           $.each(items.results, function(i, item){
            $items.append('<tr><td>' + item.name + '</td>' +
                          '<td>' + numberWithCommas(item.diameter) + ' km' + '</td>' +
                          '<td>' + item.climate + '</td>' +
                          '<td>' + item.terrain + '</td>' +
                          '<td>' + item.surface_water + '</td>' +
                          '<td>' + formatPopulation(item.population) + '</td>' +
                          '<td>' + residentsHandler(item.residents) + '</td></tr>'
                         );
           })
       }
    });
});
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //from stackoverflow
}  

function formatPopulation(x) {
    var result;
    if(x != 'unknown') {
        result = numberWithCommas(x) + ' people';
    }
    else{
        result = x;
    }
    return result; 
}

function residentsHandler(residents) {
    if (residents.length === 0) {
        return "no data"
    }
    else {
        return "<button>Resisdents</button"
    }
}