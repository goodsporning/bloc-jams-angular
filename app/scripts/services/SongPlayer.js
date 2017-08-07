
(function() {
    function SongPlayer(Fixtures) {
         var SongPlayer = {};
         var currentAlbum = Fixtures.getAlbum();
           /**
           * @desc Buzz object audio file
           * @type {Object}
           */

         var currentBuzzObject = null;
            /**
            *@function setSong
            *@desc Stops currently playing song and loads new audio file as currently playing song and loads new audio file as currentBuzzObject
            *@param {object} song
            */
         var setSong = function(song){
           if(currentBuzzObject) {
             currentBuzzObject.stop();
             SongPlayer.currentSong.playing = null;
           }
           currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['mp3'],
             preload: true
           });
           SongPlayer.currentSong = song;
         };
         /**
         *@function playSong
         *@desc function that controls the currently playing song.
         *@param {object} song
         */

        var playSong = function(song){
         currentBuzzObject.play();
         song.playing = true;

        }

         var stopSong = function(song){
          currentBuzzObject.stop();
          song.playing = null;
         }

        /**
        *@function track song #
        *@desc function to track what song is being played
        *@type {object} song
        */

        var getSongIndex = function(song){
          return currentAlbum.songs.indexOf(song);
        }
        /**
        *@desc Active song objct from list of songs
        *@type {object}
        */
        SongPlayer.currentSong = null;

        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
           }
        };



       SongPlayer.pause = function(song){
         song = song || SongPlayer.currentSong;
         currentBuzzObject.pause();
         song.playing = false;
       };

       /**
       *@function previous
       *@desc works the previous button, takes the currentSongIndex and reduces it by 1 to play that song
       *@type {object} SongPlayer.currentSong
       */


       SongPlayer.previous = function(){
         var currentSongIndex = getSongIndex(SongPlayer.currentSong);
         currentSongIndex--;

         if(currentSongIndex < 0) {
           stopSong(song);
         } else {
           var song = currentAlbum.songs[currentSongIndex];
           setSong(song);
           playSong(song);
         }
       };

       /**
       *@function next
       *@desc works the next button, increases the currentSongIndex and plays the next song
       *@type {object} SongPlayer.currentSong
       */

       SongPlayer.next = function(){
         var currentSongIndex = getSongIndex(SongPlayer.currentSong);
         currentSongIndex++;

         if(currentSongIndex > currentAlbum.songs.length) {
           currentBuzzObject.stop();
           SongPlayer.currentSong.playing = null;
           song.playing = null;
         } else {
           var song = currentAlbum.songs[currentSongIndex];
           setSong(song);
           playSong(song);
         }


       };


         return SongPlayer;
    };


  angular
      .module('blocJams')
      .factory('SongPlayer', ['Fixtures', SongPlayer]);


})();
