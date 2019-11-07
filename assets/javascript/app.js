// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//The scroll between sections
// $(".nav").click(function() {
//   var id = $(this).attr("id");
//   $("html, body").animate(
//     {
//       scrollTop: $("#" + id + ".section").offset().top
//     },
//     1000
//   );
// });

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {
//   navFunction();
// };

// // Get the navbar
// var navbar = document.getElementsByClassName(".navBar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function navFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
