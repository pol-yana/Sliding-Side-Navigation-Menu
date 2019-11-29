function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft ="250px";
}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$('.topnav a').click(function(){
    $('#sideNavigation').style.width = "250px";
    $("#main").style.marginLeft = "250px";
  });
   
  $('.closebtn').click(function(){
    $('#sideNavigation').style.width = "0";
    $("#main").style.marginLeft = "0";
  });