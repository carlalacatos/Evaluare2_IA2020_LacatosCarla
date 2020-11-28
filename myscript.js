// function stergeclase(x) {
//     if (x == "active_home") {
//         document.getElementById("navServices").classList.remove("active_services");
//         document.getElementById("navAbout").classList.remove("active_about");
//         document.getElementById("navWork").classList.remove("active_work");
//         document.getElementById("navContacts").classList.remove("active_contacts");
//     }
//     if (x == "active_services") {
//         document.getElementById("navHome").classList.remove("active_home");
//         document.getElementById("navAbout").classList.remove("active_about");
//         document.getElementById("navWork").classList.remove("active_work");
//         document.getElementById("navContacts").classList.remove("active_contacts");
//     }
//     if (x == "active_about") {
//         document.getElementById("navHome").classList.remove("active_home");
//         document.getElementById("navServices").classList.remove("active_services");
//         document.getElementById("navWork").classList.remove("active_work");
//         document.getElementById("navContacts").classList.remove("active_contacts");
//     }
//     if (x == "active_work") {
//         document.getElementById("navHome").classList.remove("active_home");
//         document.getElementById("navServices").classList.remove("active_services");
//         document.getElementById("navAbout").classList.remove("active_about");
//         document.getElementById("navContacts").classList.remove("active_contacts");
//     }
//     if (x == "active_contacts") {
//         document.getElementById("navHome").classList.remove("active_home");
//         document.getElementById("navServices").classList.remove("active_services");
//         document.getElementById("navAbout").classList.remove("active_about");
//         document.getElementById("navWork").classList.remove("active_work");
//     }
// }

// function getTo(next, current) {
//     var element = document.getElementById(next);
//     // var id = current.substring(current.lastIndexOf('#'));
//     // console.log(id);
//     console.log(next, "+", current, "+", element);
//     if (next == ('navHome')) {
//         element.classList.add('active_home');
//         var cr = 'active_home';
//     }
//     else if (next == ('navServices')) {
//         element.classList.add('active_services');
//         var cr = 'active_services';
//     }
//     else if (next == ('navAbout')) {
//         element.classList.add('active_about');
//         var cr = 'active_about';
//     }
//     else if (next == ('navWork')) {
//         element.classList.add('active_work');
//         var cr = 'active_work';
//     }
//     else if (next == ('navContacts')) {
//         element.classList.add('active_contacts');
//         var cr = 'active_contacts';
//     }

//     stergeclase(cr);
//     // if (id == 'home') var last = 'navHome';
//     // var el = document.getElementById(last);
//     // el.classList.remove('active_home');
//     // el.classList.remove('active_' + id);
// }

window.addEventListener('scroll', function() {
    // document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
    if (window.pageYOffset < 1000) {
        document.getElementById("navServices").classList.remove("active_services");
        document.getElementById("navHome").classList.add("active_home");
    }
    if (window.pageYOffset >= 1000 && window.pageYOffset < 2000) {
        document.getElementById("navHome").classList.remove("active_home");
        document.getElementById("navAbout").classList.remove("active_about");
        document.getElementById("navServices").classList.add("active_services");
    }
    if (window.pageYOffset >= 2000 && window.pageYOffset < 2983) {
        document.getElementById("navServices").classList.remove("active_services");
        document.getElementById("navWork").classList.remove("active_work");
        document.getElementById("navAbout").classList.add("active_about");
    }
    if (window.pageYOffset >= 2983 && window.pageYOffset < 4000) {
        document.getElementById("navAbout").classList.remove("active_about");
        document.getElementById("navContacts").classList.remove("active_contacts");
        document.getElementById("navWork").classList.add("active_work");
    }
    if (window.pageYOffset >= 4000 && window.pageYOffset < 50000) {
        document.getElementById("navWork").classList.remove("active_work");
        document.getElementById("navContacts").classList.add("active_contacts");
    }
  });

  function team(){
      document.getElementById("abt").style.display = "block";
  }

  function active_member(elem){
      var el = elem.childNodes;
      el[1].src = "Ellipse 2.png";
      el[3].src = "User_active.png";
      el[5].classList.add("about_active_names");
      el[5].classList.remove("about_names");
      el[7].classList.add("about_active_fct");
      el[7].classList.remove("about_fct");
      el[9].src = "social_active.png";
  }

  function inactive_member(elem){
    var el = elem.childNodes;
    el[1].src = "Ellipse 1.png";
    el[3].src = "User.png";
    el[5].classList.add("about_names");
    el[5].classList.remove("about_active_names");
    el[7].classList.add("about_fct");
    el[7].classList.remove("about_active_fct");
    el[9].src = "social.png";
  }