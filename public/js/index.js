const socket = io();

socket.on('updateRoomList', function (rooms) {
  var datalist = jQuery('<datalist></datalist>').attr('id', 'roomList');

  rooms.forEach(function (room) {
    datalist.append(jQuery('<option></option>').text(room).val(room));
  });

  jQuery('#rooms').html(datalist);
});