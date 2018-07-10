$(document).ready(function() {
    // Facebook API - like and share ----------------------
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v2.12';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

    // Date time -----------------------------------------
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;
      console.log(output)
    $('.date').text(output);

    // Footer image animation
    $("#bear-image").on("click", function() {
      $(".social").toggleClass("hide")
    })

    // Schedule section ------------------------------------------------------------
    $('td:contains("Junior"), #junior').addClass('junior')
    $('#junior').on('mouseenter mouseleave', function () {
      $('td:contains("Junior")').toggleClass('hover');
      $('td:not(:contains("Junior")), #junior').toggleClass('hoverRest');
    })
    $('td:contains("Kurczaki"), #chicken').addClass('chicken')
    $('#chicken').on('mouseenter mouseleave', function () {
      $('td:contains("Kurczaki")').toggleClass('hover');
      $('td:not(:contains("Kurczaki")), #chicken').toggleClass('hoverRest');
    })
    $('td:contains("Ziemniaki"), #tomato').addClass('tomato')
    $('#tomato').on('mouseenter mouseleave', function () {
      $('td:contains("Ziemniaki")').toggleClass('hover');
      $('td:not(:contains("Ziemniaki")), #tomato').toggleClass('hoverRest');
    })
    $('td:contains("Schaby"), #meat').addClass('meat')
    $('#meat').on('mouseenter mouseleave', function () {
      $('td:contains("Schaby")').toggleClass('hover');
      $('td:not(:contains("Schaby")), #meat').toggleClass('hoverRest');
    })
    $('td:contains("Ogorki"), #cucamber').addClass('cucamber')
    $('#cucamber').on('mouseenter mouseleave', function () {
      $('td:contains("Ogorki")').toggleClass('hover');
      $('td:not(:contains("Ogorki")), #cucamber').toggleClass('hoverRest');
    })
    $('td:contains("Marchewki"), #carrot').addClass('carrot')
    $('#carrot').on('mouseenter mouseleave', function () {
      $('td:contains("Marchewki")').toggleClass('hover');
      $('td:not(:contains("Marchewki")), #carrot').toggleClass('hoverRest');
    })


    // Gallery modal ----------------------------------------------------------------------------
    $('#gal').on('click', 'img', function(){
        console.log('clicked')
        $('#myModal').css('display', 'block');
        $('#img1').attr('src', this.src);
        $(this).addClass('active');
    });

    $('.leftArrow').on('click', function(){
      if(!$('.gallery div img').hasClass('.active')){
        $('.gallery div img:last').addClass('active')
      }
      $('.active').removeClass('active').prev('img').addClass('active');
      $('#img1').attr('src', $('.active').attr('src'));
    });

    $('.rightArrow').on('click', function(){
      if(!$('.gallery div img').hasClass('.active')){
        $('.gallery div img:first').addClass('active')
      }
      $('.active').removeClass('active').next('img').addClass('active');
      $('#img1').attr('src', $('.active').attr('src'));
    });

    $('.close').on('click', function(){
      $('#myModal').css('display', 'none');
    });


    $('menu ul a li').on('click', function () {
      $(this).addClass(highlighted)
    })















///////////////////////////////ADMIN/////////////////////////////////////
/*      // Admin login
      $('form').validate({
        rules: {
          username: {
            required: true,
            maxlength: 15
          },
          password: {
            required: true,
            maxlength: 20
          }
        }
      })

      $('#myForm input').on('keyup blur', function () {
        if ($('#myForm input').valid()) {
          $('.submit').prop('disabled', false);
        } else {
          $('.submit').prop('disabled', 'disabled')
        }
      })

      // Getting login creditentials
      let xhr = new XMLHttpRequest();
      xhr.open('GET', './js/login.json', true);
      //xhr.open('GET', '../js/login.json', true);
      xhr.responseText = 'text';

      xhr.onload = function() {
        if (xhr.status === 200) {
          let loginInfo = JSON.parse(xhr.responseText);
          let $submit =  $('.submit');
          $submit.on('click', function() {
            let userN = $('#username').val();
            let pass = $('#password').val();
            if(loginInfo.username == userN && loginInfo.password == pass) {
              console.log('Username and pass match')
              $submit.text("Correct");
              setTimeout(function() {
                $submit.text("Go to ADMIN");
              }, 1000);
              $submit.on('click', function() {
                 window.location.replace('../admin/mainadmin.html');
              })
              setTimeout(function() {
                //$('.submit').attr("type", "submit");
              }, 1000);

            } else {
              $submit.text("Wrong");
              setTimeout(function() {
                $submit.text("Login");
              }, 1000);
              console.log('don\'t try if you do not know creditentials!');

            }
          })
        }
      }
      xhr.send();

      // Text edit - Trumbowyg
      $('#trumbowyg-demo').trumbowyg({
        btns: [
            ['undo', 'redo'], // Only supported in Blink browsers
            ['formatting'],
            ['strong', 'em'],
            ['link'],
            ['insertImage'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat']
        ],
        autogrow: true
    });

      // Adding remove button to posts 
      let removeDiv = '<div class="removeDiv"></div>'
      let remove = '<button>Remove</button>'
      $('.article').wrap(removeDiv).after(remove);

      // Adding posts
      let postTemplate = '<div class="removeDiv"><div class="row article"><div class="col-sm-4 article-img"><img class="articleImg" src="../images/grizzly.png" alt="content image"></div><div class="col-sm-8" article-text><div><span>Nowa post</span><span class="date"></span></div><span class="articleText"></span></div></div><button>Remove</button>';
      $('#addPost').on('click', function() {
        let articleText = $('.trumbowyg-editor').html();

        $('.trum').after(postTemplate);
        $('.articleText:first').html(articleText)
      })

      // Removing posts
      $(document).on('click','.removeDiv button', function () {
        $(this).parent('div').remove();
      })

*/

})
// Google maps
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(52.139178, 21.063731)
  });


  var content1 = '<h4>Ursynow</h4>' +
                 '<p>Lokajskiego szkola</p>' +
                 '<p>Tel: 888-777-666</p>'
  var content2 = '<h4>Bemowo</h4>' +
                 '<p>Rasteyki szkola</p>' +
                 '<p>Tel: 888-777-666</p>'
  var content3 = '<h4>Włochy</h4>' +
                 '<p>Wolska szkola</p>' +
                 '<p>Tel: 888-777-666</p>'
  var content4 = '<h4>Żoliborz</h4>' +
                 '<p>Prymasa szkola</p>' +
                 '<p>Tel: 888-777-666</p>'

  // Add markers
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map
      });

      if(props.content) {
        var infoWindow = new google.maps.InfoWindow({
          content: props.content
        });
      
        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        })
      }
  }

  addMarker({coords:{lat:52.139178, lng:21.063731},content: content1});
  addMarker({coords:{lat:52.179906, lng:20.947816},content: content2});
  addMarker({coords:{lat:52.240907, lng:20.911330},content: content3});
  addMarker({coords:{lat:52.269329, lng:20.981875},content: content4});


}