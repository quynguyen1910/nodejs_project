// export default (duration = 3000) => {
//   const nodesAlertFlash = document.querySelectorAll("[alert-flash]");
//   if (nodesAlertFlash.length > 0) {
//     nodesAlertFlash.forEach((alert,index) => {
//       const height = alert.offsetHeight;
//       alert.style.top = `${index * (height + 10)}px`;
//       const button = alert.children[0];
//       button.addEventListener("click", () => {
//         alert.remove();
//       });
//       setTimeout(() => {
//         alert.classList.remove("active");
//       }, duration + +index*500 - 1000);
//       setTimeout(() => {
//         alert.remove();
//       }, duration + 1000 + +index*500);
//     });
//   }
// };

const showAlertFlash = (duration = 3000) => {
  console.log('ok');
  const nodesAlertFlash = document.querySelectorAll("[alert-flash]");
  if (nodesAlertFlash.length > 0) {
    nodesAlertFlash.forEach((alert,index) => {
      const height = alert.offsetHeight;
      alert.style.top = `${index * (height + 10)}px`;
      const button = alert.children[0];
      button.addEventListener("click", () => {
        alert.remove();
      });
      setTimeout(() => {
        alert.classList.remove("active");
      }, duration + +index*500 - 1000);
      setTimeout(() => {
        alert.remove();
      }, duration + 1000 + +index*500);
    });
  }
};
showAlertFlash();
