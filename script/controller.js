(function(){
	function FormController(StoryService){
		var vm = this;
		vm.addWords = function(info){
			StoryService.setWords(info);
		};
	}
	function StoryController(StoryService){
		 var vm = this;
		 vm.words = StoryService.getWords();
		 console.log(vm.words);

	}
	angular
	.module("storyApp")
	.controller("FormController", FormController)
	.controller("StoryController", StoryController);
})();