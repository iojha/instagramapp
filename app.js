//Instagram Configuration Data (Client info)

instagram = {
  clientID: 'c9dc11e83bec473d826806968f4c5630',
  apiHost: 'https://api.instagram.com',
};

// Varirables for the tag to pull from
var tag = 'nepal',
    min = '';

// Function to load the Instagrams
function showImages() {

    // Pull in the data from Instagram
      $.ajax({
        type: "GET",
        url: instagram.apiHost + "/v1/tags/" + tag + "/media/recent",
        data: {'client_id': instagram.clientID, 'max_tag_id': min},
        dataType: "jsonp",
        },


// Success 
    success: function(photos){
        for(i=0;i<photos.data.length;i++){
            // Vars for instagram data
            var img = photos.data[i].images.standard_resolution.url,
                link = photos.data[i].link,
                likes = photos.data[i].likes.count,
                id = photos.data[i].id,
                //Append Photos to results
                $(".results").append("<div id='image-list'><a target='_blank' href='" + link + "'>" + "</div></div><img src='" + urlsrc + "'></img></div>");
        }
    });
  }

  
  $(document).ready(function(){
    $('.image-getter').submit( function(event){
      // zero out results if previous search has run
    $('.results').html('');
    // get the value of the tags the user submitted
    showImages();
    });
  });