document.addEventListener('DOMContentLoaded', function () {
  var urlParams = new URLSearchParams(window.location.search);
  var studentId = urlParams.get('studentId');
  fetchStudentData(studentId);
});

function fetchStudentData(studentId) {
  var xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'get_student_data.php?studentId=' + encodeURIComponent(studentId),
    true
  );

  xhr.onload = function () {
    if (xhr.status == 200) {
      var studentData = JSON.parse(xhr.responseText);
      populateForm(studentData);
    } else {
      console.error('Failed to fetch student data');
    }
  };

  xhr.send();
}

function populateForm(data) {
  document.getElementById('studentId').value = data.student_id;
  document.getElementById('firstName').value = data.first_name;
  document.getElementById('lastName').value = data.last_name;
  document.getElementById('dob').value = data.date_of_birth;
  document.getElementById('streamId').value = data.stream_id;
}

function updateStudentData() {
  var studentId = document.getElementById('studentId').value;
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var dob = document.getElementById('dob').value;
  var streamId = document.getElementById('streamId').value;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'update_data.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onload = function () {
    if (xhr.status == 200) {
      alert('Student updated successfully');
      window.location.href = 'view_students.html'; // Redirect back to the student list
    } else {
      alert('Error updating student');
    }
  };

  var data =
    'studentId=' +
    encodeURIComponent(studentId) +
    '&firstName=' +
    encodeURIComponent(firstName) +
    '&lastName=' +
    encodeURIComponent(lastName) +
    '&dob=' +
    encodeURIComponent(dob) +
    '&streamId=' +
    encodeURIComponent(streamId);

  xhr.send(data);
}
