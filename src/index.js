document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('#create-task-form').addEventListener('click', taskcreated)

  function taskcreated() {
    return alert ('Task created successfully')
  }
  function taskdelete(e) {
    e.target.parentNode.remove()
  }
});
