//frontend jquery code that connects backend js code
$(document).ready(function () {
  console.log("Hello from JQuery");

  $('delete-btn').on('click', function () { // click to delete bears
    var id =$(this).attr('id');
    $ajax({
      url: '/api/bears/'+id,
      method: 'Delete'
    }).done(function (data) {
      console.log(data);
      window.location = '/bears';
    });
    $(this).closest('tr').remove();
  });

  $('.update').on('click', function (){
    var bearId = $(this).attr('id').slice(7);
    //console.log(bearId);
    $.get('/api/bears' + bearId).done (function (data) {
      console.log(data);
      $('#name').val(data.name);
      $('#species').val(data.species);
      $('#age').val(data.age);
      $('#weight').val(data.weight);
      $('#location').val(data.location);
      $('#attitude').val(data.attitude);
    });
  });

  $('update_bear').on('click', function (){
    var updateData = {name: $('#name').val(),
                     species: $('#species').val(),
                     age: $('#age').val(),
                     weight: $('#weight').val(),
                     location: $('#location').val(),
                     attitude: $('#attitude').val(),
                    };

  $('#newBear').submit(function (e) {
    e.preventDefault(),
      var name = $('#name').val(),
      var species = $('#species').val(),
      var age = $('#age').val(),
      var weight = $('#weight').val(),
      var location = $('#location').val(),
      var attitude = $('#attitude').val(),
    });
  });

    $.ajax({
      url: '/api/bears/',
      method: 'POST',
      data: {
        name: name,
        species: species,
        age: age,
        weight: weight,
        location: location,
        attitude: attitude
      }
    }).done(function (data) {
  });
