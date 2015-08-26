  

  $(document).ready(function(){

  // Client information and API keys
  var min='', 
      url='',
      instagram = {
        clientID: 'c9dc11e83bec473d826806968f4c5630',
        apiHost: 'https://api.instagram.com',
      }

  // Load images from Instagram
  function imageLoad() {                      
    tag = $('input').val();

    // AJAX request and callback
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: instagram.apiHost + "/v1/tags/" + tag + "/media/recent/?client_id=" + instagram.clientID + "&count=48",
      data: {
        'client_id': instagram.clientID, 
        'max_tag_id': min
      },

      //Return image output
      success: function(pic) {
        min = pic.pagination.next_max_tag_id;
        url = pic.pagination.next_url;
        $('.controlbutton').removeClass('hidden');
        console.dir(pic);
        for (var i = 0; i < pic.data.length; i++) {
          likes = pic.data[i].likes.count;
          console.log(likes);
          link = pic.data[i].link;
          urlsrc = pic.data[i].images.thumbnail.url;
          $("#output").append("<div id='outputpic'><a target='_blank' href='" + link + "'>" + "</div></div><img src='" + urlsrc + "'></img></div>");
        }  
      }      
    });
  }
    
  // Submit input after delay
  var timerid;                                     
  $('input').keyup(function(){
    clearTimeout(timerid);
    timerid = setTimeout(function(){
      imageLoad(); 
    }, 
    300);
  });

  // Clear pictures and start new search
  $('#clearall').on('click', function(){         
    $('#output').empty();
    $('input').val('');
    $('input').focus();
  })

  // Clear input value
  $('input').on('click focusin', function() {      
      this.value = '';
  });
});