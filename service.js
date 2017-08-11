  var app = angular.module("madLibs");

  app.factory("displayStory", function(){
    var form = {};

    return {
      setStory: function(words) {
        form = words;
      },
      getStory: function () {
        return form;
      }
    }

  });
