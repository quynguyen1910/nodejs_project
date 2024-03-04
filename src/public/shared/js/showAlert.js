export default (message, typeAlert = "alert-success", duration = 3000) => {
  console.log('ok');
  const createAlert = document.createElement("div");
  createAlert.classList.add("alert", typeAlert, "ct-alert");
  createAlert.role = "alert";
  document.body.appendChild(createAlert);
  const nodeAlert = document.body.querySelector(".ct-alert");
  nodeAlert.textContent = message;
  setTimeout(() => {
    nodeAlert.classList.add("active");
  }, 10);
  setTimeout(() => {
    nodeAlert.classList.remove("active");
  }, duration - 1000);
  setTimeout(() => {
    createAlert.remove();
  }, duration);
};
