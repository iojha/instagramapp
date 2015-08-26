$(document).ready(function(){
    $('#results').html('');
    showImages();
    });


//Instagram Configuration Data (Client info)

instagram = {
  clientID: 'c9dc11e83bec473d826806968f4c5630',
  apiHost: 'https://api.instagram.com',
};

// Varirables for the tag to pull from
var tag = 'muktinath',
    min = '';

// Function to load the Instagrams
function showImages() {
    // Pull in the data from Instagram
        $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: instagram.apiHost + "/v1/tags/" + tag + "/media/recent/?client_id=" + instagram.clientID + "&count=48",
        data: {
        'client_id': instagram.clientID, 
        'max_tag_id': min
      },

// Success 
     success: function(pic) {
        min = pic.pagination.next_max_tag_id;
        url = pic.pagination.next_url;

        for (var i = 0; i < pic.data.length; i++) {
          likes = pic.data[i].likes.count;
          link = pic.data[i].link;
          urlsrc = pic.data[i].images.thumbnail.url;
          $("#results").append("<li><a target='_blank' href='" + link + "'>" + "</div><div><img src='" + urlsrc + "'></img></div></li>");
        }  
      }      
    });
}