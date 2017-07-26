(function(){
    function AlbumCtrl(){

      this.albumData = [];
      for(var i=0; i < 5; i++){
        this.albumData.push(angular.copy(albumPicasso));

      }
      this.Title = "The Colors";
      this.albumArtist = "Pablo Picasso";


    }


angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl)

  })();
