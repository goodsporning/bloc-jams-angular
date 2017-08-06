
(function() {
    function SongPlayer() {
         var SongPlayer = {};
         var currentSong = null;
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
             currentSong.playing = null;
           }
           currentBuzzObject = new buzz.sound(song.audioUrl, {
             formats: ['mp3'],
             preload: true
           });
           currentSong = song;
         };

         SongPlayer.play = function(song) {
           if (currentSong !== song) {
              setSong(song);

             playSong(song);

           } else if (currentSong === song) {
           if (currentBuzzObject.isPaused()) {
               currentBuzzObject.play();
           }
       }
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

       SongPlayer.pause = function(song){
         currentBuzzObject.pause();
         song.playing = false;
       };

         return SongPlayer;
    }


  angular
      .module('blocJams')
      .factory('SongPlayer', SongPlayer);

})();