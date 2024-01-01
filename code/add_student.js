function addStudent() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'add_student.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      alert(xhr.responseText);
    }
  };

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var dob = document.getElementById('dob').value;
  var streamId = document.getElementById('streamId').value;
  var data =
    'firstName=' +
    firstName +
    '&lastName=' +
    lastName +
    '&dob=' +
    dob +
    '&streamId=' +
    streamId;

  xhr.send(data);
}
