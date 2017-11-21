(function (){
	var formComponent = {
		templateUrl:"partials/form.html",
		controller: "FormController"
	};
	angular
	 .module("storyApp")
	 .component("formComponent",formComponent);
})();