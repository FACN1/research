/* generic XHR request */
function request (url, method, data, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      cb(null, xhr.responseText);
    } else {
      cb("error" + xhr.responseType);
    }
  };
  xhr.open(method, url, true);
  xhr.send(data);
}

function updateDom (err, data) {
  if (err) {
    console.log(err);
  } else {
    var users = JSON.parse(data);
    // console.log(users);
    var table = document.getElementById("users-table");
    /* create a row in table for each user returned from DB */
    users.forEach(function(user) {
      var row = document.createElement("tr");
      var name = document.createElement("td");
      name.innerHTML = user.name;
      row.appendChild(name);
      var location = document.createElement("td");
      location.innerHTML = user.location;
      row.appendChild(location);
      table.appendChild(row);
    });
  }
}

document.querySelector('form button').addEventListener('click', (event) => {
  event.preventDefault();
  var data = 'name=' + document.querySelector('form input[name="name"]').value;
  data += '&location=' + document.querySelector('form input[name="location"]').value
  console.log(data);
  request('/create-user', "POST", data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
})

request('/users', "GET", null, updateDom);
