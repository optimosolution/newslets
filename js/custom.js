jQuery(document).ready(function(e) {
	  $('[data-toggle="tooltip"]').tooltip();
   $('#myModal').modal();

     $('#loginModal').on('shown.bs.modal', function () {
  $('#loginModal').find('input').focus(); 
 $("[data-toggle = 'popover']").popover();
}); 
$(".custom-select").each(function(){
            $(this).wrap("<span class='select-wrapper'></span>");
            $(this).after("<span class='holder'></span>");
        });
		
        $(".custom-select").change(function(){
            var selectedOption = $(this).find(":selected").text();
            $(this).next(".holder").text(selectedOption);
        }).trigger('change'); 
$(document).on('click','.toprightcorner',function(){
	//alert("test");
//e.preventDefault();
	  $(this).parent().remove();
});
$(window).load(function(){
				
				$("#contenttoreader").mCustomScrollbar({
					setHeight:340,
					theme:"minimal-dark",
					scrollbarPosition:"outside"
				});
				$("#readersection").mCustomScrollbar({
					setHeight:590,
					theme:"minimal-dark",
					scrollbarPosition:"outside"
				});
				
				$("#followobjectively").mCustomScrollbar({
					setHeight:550,
					theme:"minimal-dark",
					scrollbarPosition:"outside"
				});
				$("#commentspanel").mCustomScrollbar({
					setHeight:550,
					theme:"minimal-dark",
					scrollbarPosition:"outside"
				});
				$("#postexpandimagepanel").mCustomScrollbar({
					setHeight:550,
					theme:"minimal-dark",
					scrollbarPosition:"outside"
				});
				
				
			});
	/*$("#commentsModal").modal();*/
});
   