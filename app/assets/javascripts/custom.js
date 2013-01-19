$(document).ready(function() {
	// The actual form
	$(".picker .option").on("click", function(event){
		// this = option clicked
		// index of item relative to other children
		var $input = $(this).parent().parent().children("select");
		var i = $(this).index();
		// sets the actual form value
		// $input[0] -- we need the [0] to actual the element (not the jQuery) (there should only be one)
		$input[0].options[i].selected = true;
		// set id of selected element to match option (to be same color)
		//var selected = $(this).parent().parent(); // visible selected elemented
		//selected.attr("id", $(this).attr("id")); // here we set the id of the selected element to the id of the clicked element
	});


    // Stops Devise from signing out user when Ajax POST request is made
    $.ajaxSetup({
	    beforeSend: function(xhr) {
	        xhr.setRequestHeader('X-CSRF-Token',
	        $('meta[name="csrf-token"]').attr('content'));
	    }
    });

    // Highlight options in the selected element
    var lightSwitch = function(element_name, border) {
    	border = typeof border !== undefined ? border : false;
    	var selected = null;
	    options = $(element_name + " + .picker > .option");
		options.on("click", function(event) {
			if (selected !== null) {
				if (border) {
					selected.style.border = "";
				} else {
					selected.style.color = '#FFFFFF';
				}
			}
			selected = this;
			if (border) {
				this.style.border = "2px solid #11A1F4";
			} else {
				this.style.color = '#11A1F4';
			}
		});
    }

    lightSwitch("#ID OF THING"); // used to be true
}