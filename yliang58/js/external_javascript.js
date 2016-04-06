
$(document).ready(function(){

	$("#nav").hide();
	
	
	/*
	if user clicks on the menu icon,
	a full list of navigation display
	*/
	$("#nav_icon").click(function(){
		$("#nav").slideToggle();

    });
	
	
	   $("#lecture_list").hide();
	/*
	if user clicks on "lecture"
	the lecture_list will display"
	*/
		$("#lecture").click(function(){
		$("#lecture_list").slideToggle();
	});



	 $("#exercise_list").hide();
	/*
	if user clicks on "lecture"
	the lecture_list will display"
	*/
		$("#exercise").click(function(){
		$("#exercise_list").slideToggle();
	});


		 $("#homework_list").hide();
	/*
	if user clicks on "lecture"
	the lecture_list will display"
	*/
		$("#homework").click(function(){
		$("#homework_list").slideToggle();
	});


			 $("#quiz_list").hide();
	/*
	if user clicks on "lecture"
	the lecture_list will display"
	*/
		$("#quiz").click(function(){
		$("#quiz_list").slideToggle();
	});


});