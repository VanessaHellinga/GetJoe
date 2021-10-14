//HAMBURGER MENU

document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.mini-nav').classList.toggle('change');
})


//MENU SHRINK ON SCROLL

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("header").style.height = "5vw";
    document.getElementById ("header").style.paddingBottom = "1rem"
    document.getElementById("invisible-home-link").style.fontSize = "5rem";
    document.getElementById("change-logo").style.width = "12vw";
    // document.getElementById("change-logo").style.alignSelf = "center";
    document.getElementById("change-links").style.fontSize = "60%";
    document.getElementById("change-links").style.paddingTop = "2.5rem";
    document.getElementById("change-icons").style.opacity = "0";
  } else {
    document.getElementById("header").style.height = "12vw";
    document.getElementById ("header").style.paddingBottom = "0"
    document.getElementById("invisible-home-link").style.fontSize = "6rem";
    document.getElementById("change-logo").style.width = "22vw";
    // document.getElementById("change-logo").style.alignSelf = "center";
    document.getElementById("change-links").style.fontSize = "100%";
    document.getElementById("change-icons").style.opacity = "1";
  } 
  }


//SCROLL TO TOP BUTTON APPEARS AT ARTIST SECTION

lateScroll = document.getElementById("chevron-btn");

var myScrollFunction = function() {
  var y = window.scrollY;
  if (y > 999) {
    lateScroll.className = "scroll-up-btn show"
  } else {
    lateScroll.className = "scroll-up-btn hide"
  }
};

window.addEventListener("scroll", myScrollFunction);


//SLIDESHOW

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); 
}


//FORM SUBMIT 

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


//EXPERIENCE BUTTON REVEAL BIO

document.querySelectorAll('.experience-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
});









  
    

    
  
