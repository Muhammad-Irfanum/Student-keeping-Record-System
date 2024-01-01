document.addEventListener('DOMContentLoaded', function () {
  fetchStreams();
});

function fetchStreams() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'fetch_streams.php', true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      var streams = JSON.parse(xhr.responseText);
      var html = '<table><tr><th>ID</th><th>Stream Name</th></tr>';
      streams.forEach(function (stream) {
        html += '<tr>';
        html += '<td>' + stream.stream_id + '</td>';
        html += '<td>' + stream.stream_name + '</td>';
        html += '</tr>';
      });
      html += '</table>';
      document.getElementById('streamsList').innerHTML = html;
    } else {
      console.error('Error fetching streams');
      document.getElementById('streamsList').innerHTML = 'Failed to load data.';
    }
  };

  xhr.send();
}
