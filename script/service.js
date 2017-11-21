(function(){
	function StoryService($location){
	var info ={};
 return {
 	setWords: setWords,
 	getWords: getWords,
 	}
 function setWords(words){
 		info = words;
 		$location.path("/story");
	}
  function getWords(){
 		return info;
 	}

}

	angular
	 .module("storyApp")
	 .factory("StoryService",StoryService);
})();