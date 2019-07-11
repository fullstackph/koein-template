$(function(){
  InitHtmlInclude();

	var mainObj = $("main");
	if(mainObj.hasClass('home')){
		InitHomeSwiper();
		InitHomeProductLayout();
		InitHomeDorpsowns();
		InitGlobalFunction();
	}
	else if(mainObj.hasClass('category')){
		InitCategorySwiper();
		InitCategoryProductLoading();
		InitDatepickers();
		InitGlobalFunction();
	}
});

//Global functions
function InitGlobalFunction(){
	$('header select.headerOptions').click(function(){
		//code goes here
	});

	$('select.category').click(function(){
		//code goes here
	});
}

function InitHtmlInclude() {
  w3.includeHTML();
}
//End Global functions

//Home functions
function InitHomeSwiper(){
	//code goes here
}
function InitHomeProductLayout(){
	//code goes here
}
function InitHomeDorpsowns(){
	//code goes here
}
//End Home functions

//Category functions
function InitCategorySwiper(){
	//code goes here
}
function InitCategoryProductLoading(){
	//code goes here
}
function InitDatepickers(){
	//code goes here
}
//End Category functions
