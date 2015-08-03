$(function() {
  var $newItemButton = $('#newItemButton'); // this something...
  var $newItemForm = $('#newItemForm'); // the form

  $newItemButton.show();
  $newItemForm.hide();

  // click 'this something' button to show form
  $('#showForm').on('click', function() {
    $newItemButton.hide(); // hides the button
    $newItemForm.show(); // shows form
  });

  // Form - Append items to <ul> - Submit
  $newItemForm.on('submit', function(e){ // on submit
    e.preventDefault(); // prevent default of refreshing page
    var $item = $('input[name=item]').val();

    var newListItem = '<li>';
    newListItem+='<input type="checkbox" class="done" />';
    newListItem+='<span class="display">' + $item + '</span>';
    newListItem+='<input type="text" class="edit" style="display:none" />';
    newListItem+='</li>'; // built the entry of new item on the list

    $('ul').append(newListItem); // append the new item to the ul
    $('input[name=item]').val(''); // clear the input box

    // Edit item
    // When you dblclick on span with class display,
    // hide this span and show the input with class edit
    // take the value of this edit box and change the text
    $('.display').on('dblclick', function() {
      $(this).hide().siblings('.edit').show().val($(this).text()).focus();
    });

    // when you focus out on the edit box,
    // it will display the input value of class edit
    $('.edit').focusout(function() {
      $(this).hide().siblings('.display').show().text($(this).val());
    });

    // Check box to remove item
    $('.done').on('click', function() { // click on done
      var parent = $(this).parent(); // select the parent of input done
      parent.animate({ // which is the list item, animate it
        opacity: 0.0, // by changing opacity of li to 0 (white)
        paddingLeft: '+=80' // sliding to right by 80 pixels
      }, 700, function() { // at the speed of 700 milliseconds
        parent.remove(); // then remove it
      });
    });
  });  // end of newItemForm
}); // end of all code


