var socket = io();
const ul = document.getElementById("messages");
const message = document.getElementById("message");
const btn = document.getElementById("submit");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  socket.emit("msg_send", {
    msg: message.value,
  });
});

socket.on("msg_received", (data) => {
  const li = document.createElement("li");
  li.innerText = data.msg;
  ul.appendChild(li);
  console.log(ul);
});
