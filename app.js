  

  $(document).ready(function(){
    $('.image-getter').submit( function(event){
      // zero out results if previous search has run
    $('.results').html('');
    // get the value of the tags the user submitted
    var tags =$(this).find("input[name='searchtag']").val();
    getImages(searchtag);
    });
  });

////////////////////////////////

//Get Images
var getImages = function(searchtag) {
  //client info and API keys
  var min='', 
      url='',
      instagram = {
        clientID: 'c9dc11e83bec473d826806968f4c5630',
        apiHost: 'https://api.instagram.com',
      }

  // AJAX request and callback
  var result= $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: instagram.apiHost + "/v1/tags/" + tag + "/media/recent/?client_id=" + instagram.clientID + "&count=48",
      data: {
        'client_id': instagram.clientID, 
        'max_tag_id': min
      },
    }
   // Load images from Instagram
  function getImages() {                      
    tag = $('input').val();
    
      //Return image output
      success: function(result) {
        min = pic.pagination.next_max_tag_id;
        url = pic.pagination.next_url;
        $('.clearbtn').removeClass('hidden');
        console.dir(pic);
        for (var i = 0; i < pic.data.length; i++) {
          likes = pic.data[i].likes.count;
          console.log(likes);
          link = pic.data[i].link;
          urlsrc = pic.data[i].images.thumbnail.url;
          $(".results").append("<div id='resultsimage'><a target='_blank' href='" + link + "'>" + "</div></div><img src='" + urlsrc + "'></img></div>");
        }  
      }      
    });
  }
    


///////////////////////////////
  // Client information and API keys
  var min=10, 
      url='',
      instagram = {
        clientID: 'c9dc11e83bec473d826806968f4c5630',
        apiHost: 'https://api.instagram.com',
      }

  // Load images from Instagram
  function getImages() {                      
    tag = $('input').val();

    
      //Return image output
      success: function(pic) {
        min = pic.pagination.next_max_tag_id;
        url = pic.pagination.next_url;
        $('.clearbtn').removeClass('hidden');
        console.dir(pic);
        for (var i = 0; i < pic.data.length; i++) {
          likes = pic.data[i].likes.count;
          console.log(likes);
          link = pic.data[i].link;
          urlsrc = pic.data[i].images.thumbnail.url;
          $(".results").append("<div id='resultsimage'><a target='_blank' href='" + link + "'>" + "</div></div><img src='" + urlsrc + "'></img></div>");
        }  
      }      
    });
  }
    
  /*
  var timerid;                                     
  $('input').keyup(function(){
    clearTimeout(timerid);
    timerid = setTimeout(function(){
      imageLoad(); 
    }, 
    300);
  }); */

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