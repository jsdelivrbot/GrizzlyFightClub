$(function(){

// GET Posts
    $.ajax({
        type: 'GET',
        url: '../php/GETposts.php',
        dataType: 'json',
        success: function(post) {
            //console.log(post);
            for(let i = post.length - 1; i >= 0; i--){
                let article = '<div class="row article"><div class="col-sm-3 post-img"><img class="article-img" src="./images/grizzly.png" alt="content image"></div><div class="col-sm-9"><div><span class="article-title">' + post[i].title + '</span><span class="date">' + post[i].time_date + '</span></div><span class="article-body">' + post[i].post_body + '</span></div></div>';
                $('.posts').append(article); 
            }
        }
    })

// Contact form
$('#contactForm').validate({
        rules: {
            email: {
                required: 'true',
                email: 'true'
            },
            title: {
                required: 'true',
                minlength: 5
            },
            message: {
                required: 'true',
                minlength: 20
            }
        }
    })
    $('#contactForm div input, textarea').on('blur', function () {
        if($('#email').hasClass('valid') && $('#title').hasClass('valid') && $('#message').hasClass('valid')) {
            $('#contactSubmit').prop('disabled', false);
        } else {
            $('#contactSubmit').prop('disabled', 'disabled');
        }
    })

    // Submitting form inputs to DB
    $('#contactForm').on('submit', function(e){
        
        e.preventDefault();
        
        let formData = $('#contactForm').serialize();

        $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: formData
        })
        .done(function(){
            $('#contactSubmit')
            .after('<div class="alert alert-success" style="margin-top: 10px; font-weight: bold">Wiadomość wysłana</div>')
            setTimeout(function(){$('#contactSubmit').next().remove()}, 3000)
        })
        .fail(function(){
            $('#contactSubmit')
            .after('<div class="alert alert-danger" style="margin-top: 10px; font-weight: bold">Bład w wysyłniu wiadomości</div>')
            setTimeout(function(){$('#contactSubmit').next().remove()}, 3000)
        })

    })

// Images load
$('.galleryMenu ul li').on('click', function(){
    let $output = $('#gal');
    let postId = $(this).attr('id');

    $.ajax({
        type: 'POST',
        url: '../php/connect.php',
        data: {postId: postId},
        dataType: 'json',
        success: function (data) {
            $output.html('');
            for (let i = 0; i < data.length; i++) {

                let imgDiv = '<img src="../images/' + postId + '/'+ data[i].alt_text +'" alt="' + data[i].alt_text + '" width="100px" height="100px">'

                $output.prepend(imgDiv);
            }
        }
    })

})

})