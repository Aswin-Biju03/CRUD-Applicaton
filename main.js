let users = [];

const form = document.getElementById(`userForm`);
const tableBody = document.getElementById(`tableBody`);
const editIndexInput = document.getElementById(`editIndex`);

// add entry to users
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //get name and email
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  //   add name and email to users
  if (editIndexInput.value == "") {
    users.push({ name, email });
  } else {
    users[editIndexInput.value] = { name, email };
    editIndexInput.value = "";
  }
  form.reset();
  console.log(users);
  displayUsers();
});
const displayUsers = () => {
  tableBody.innerHTML = "";
  users.forEach((user, index) => {
    tableBody.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
              <div class="d-flex gap-2">
                <button onClick="editUser(${index})" class="btn btn-warning btn-sm">Edit</button>
                <button onClick="deleteUser(${index})"class="btn btn-danger btn-sm">Delete</button>
              </div>
            </td>
          </tr>`;
  });
};

const editUser = (index) => {
  document.getElementById("name").value = users[index].name;
  document.getElementById("email").value = users[index].email;
  editIndexInput.value = index;
};

const deleteUser = (index) => {
  if (confirm(`Are you sure you want to delete the data?`)) {
    users.splice(index, 1);
    displayUsers();
  }
};
