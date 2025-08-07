// Custom JavaScript
$('#frameTerm').on('load',function() {
	$('#warpTerm').slideDown();
	$('#btnOpenTerm')
		.html("<i class='fas fa-external-link-alt'></i> Detach")
		.removeClass("btn-danger")
		.addClass("btn-info")
		.prop("disabled",false);
	$('#alertTerm').remove();
});

function detachFrameTerm(url) {
	window.open(url, "_blank", "width=700,height=400");
}

function copy(id){
	var $temp = $("<input>");
 	$('#cmd'+id).append($temp);
 	$temp.val($('#cmd'+id).text()).select();
 	document.execCommand("copy");
	$temp.remove();
	$("#cp"+id).removeClass("btn-info").addClass("btn-success").html("<i class='fas fa-check'></i>");
}