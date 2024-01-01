document.addEventListener('DOMContentLoaded', function () {
  fetchStudents();
});

function fetchStudents() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'fetch_students.php', true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var students = JSON.parse(xhr.responseText);
      var html = '<table><tr><th>ID</th><th>Name</th><th>Actions</th></tr>';
      students.forEach(function (student) {
        html += '<tr>';
        html += '<td>' + student.student_id + '</td>';
        html += '<td>' + student.first_name + ' ' + student.last_name + '</td>';
        html +=
          "<td><button onclick='updateStudent(" +
          student.student_id +
          ")'>Update</button>";
        html +=
          "<button onclick='deleteStudent(" +
          student.student_id +
          ")'>Delete</button></td>";
        html += '</tr>';
      });
      html += '</table>';
      document.getElementById('studentsList').innerHTML = html;
    }
  };

  xhr.send();
}

function updateStudent(studentId) {
  window.location.href =
    'update_data.html?studentId=' + encodeURIComponent(studentId);
}

function deleteStudent(studentId) {
  if (confirm('Are you sure you want to delete this student?')) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost/Irfan/delete_data.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
      if (xhr.status == 200) {
        alert('Student deleted successfully');
        fetchStudents(); // Refresh the list
      } else {
        alert('Error deleting student');
      }
    };

    xhr.send('studentId=' + encodeURIComponent(studentId));
  }
}
