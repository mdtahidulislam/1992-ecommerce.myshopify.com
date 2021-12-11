$.get('https://ipinfo.io',function(response){
    $("#country").html(response.city +', '+ response.country);
},'json');