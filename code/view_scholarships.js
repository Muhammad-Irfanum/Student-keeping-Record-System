
document.addEventListener('DOMContentLoaded', function () {
  fetchScholarships();
});

function fetchScholarships() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'fetch_scholarships.php', true); // Ensure this path is correct

  xhr.onload = function () {
      if (xhr.status === 200) {
          var scholarships = JSON.parse(xhr.responseText);
          var html = '<table><tr><th>ID</th><th>Amount</th><th>Granted Date</th></tr>';
          scholarships.forEach(function (scholarship) {
              html += '<tr>';
              html += '<td>' + scholarship.id + '</td>';  // Adjust field names as per your database
              html += '<td>' + scholarship.amount + '</td>';
              html += '<td>' + scholarship.granted_date + '</td>';
              html += '</tr>';
          });
          html += '</table>';
          document.getElementById('scholarshipsList').innerHTML = html;
      } else {
          console.error('Error fetching scholarships');
          document.getElementById('scholarshipsList').innerHTML = 'Failed to load data.';
      }
  };

  xhr.send();
}
