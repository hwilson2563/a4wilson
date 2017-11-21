(function (){
	var storyComponent = {
		templateUrl:"partials/story.html",
		controller: "StoryController"
	};
	angular
	 .module("storyApp")
	 .component("storyComponent",storyComponent);
})();