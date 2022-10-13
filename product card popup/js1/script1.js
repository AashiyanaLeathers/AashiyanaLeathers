// navbar

// body.addEventListener("click" , e =>{
//   let clickedElm = e.target;

//   if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
//       nav.classList.remove("active");
//   }
// });

// Scroll Top 
            let scrollTop = document.querySelector(".scroll-top");

            window.addEventListener("scroll", () => {
                scrollTop.classList.toggle("scroll-active", window.scrollY >= 400 );
            });


            const header = document.getElementById('header');
            const toggle = document.getElementById('toggle');
            const navbar = document.getElementById('navbar');

            document.onclick = function(e){
                if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
                    toggle.classList.remove('active')
                    navbar.classList.remove('active')
                }
            }

            toggle.onclick = function(){
                toggle.classList.toggle('active');
                navbar.classList.toggle('active');
            }

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


// xzoom js

$(function(){
  $(".xzoom, .xzoom-gallery").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom1, .xzoom-gallery1").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom2, .xzoom-gallery2").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom3, .xzoom-gallery3").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom4, .xzoom-gallery4").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom5, .xzoom-gallery5").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom6, .xzoom-gallery6").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom7, .xzoom-gallery7").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom8, .xzoom-gallery8").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom9, .xzoom-gallery9").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom10, .xzoom-gallery10").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom11, .xzoom-gallery11").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom12, .xzoom-gallery12").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 

$(function(){
  $(".xzoom13, .xzoom-gallery13").xzoom({
      zoomWidth: 400,
      tint: "#333",
      Xofffset: 15,
  });
}); 