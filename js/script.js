let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let anchor = document.querySelector('.anchorlogins');
let anchors = document.querySelector('.anchorlogin');
let anch = document.querySelector('.anchorlog');
let showlogin =document.querySelector('.login-form-container');

anchor.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    showlogin.classList.toggle('active');
});
anchors.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    showlogin.classList.toggle('active');
});
anch.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    showlogin.classList.toggle('active');
});

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}



window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};



$(document).ready(function() {
  $(".links").click(function(e) {
    var sectionId = $(this).data("sectionId");
    $(".conteudo").removeClass("active");
    $(".conteudo[data-section-id=" + sectionId + "]").addClass(
      "active");
      $(".links").removeClass("active");
      $(".links[data-section-id=" + sectionId + "]").addClass(
        "active");
  });
});
