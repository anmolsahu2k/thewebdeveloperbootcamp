$("ul").on("click","li",function(){//listener added to entire ul because new ul will stay inside ul
	$(this).toggleClass("done");
});

//$("li").on("click","span",function(event){(will only apply the listener to existing lis, hence use ul)
$("ul").on("click","span",function(event){
	event.stopPropagation();//stop the function from getting triggered for the parent elements
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
})
$("input").on("keypress",function(event){
	if(event.which==13){
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> "+$(this).val()+"</li>");
		$(this).val("");
	}

})
$("h1 i").on("click",function(){
	$("input").fadeToggle(500);
});