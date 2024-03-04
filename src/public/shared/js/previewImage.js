export default () => {
    const nodeInputFile = document.querySelector('input[name="thumbnail"]');
  if (nodeInputFile) {
    nodeInputFile.addEventListener("change", (event) => {
      const nodePreviewImage = document.getElementById("preview-image");
      if (event.target.files[0]) {
        nodePreviewImage.src = URL.createObjectURL(event.target.files[0]);
        nodePreviewImage.onload = function () {
          URL.revokeObjectURL(nodePreviewImage.src);
        };
      } else {
        nodePreviewImage.src = "img/preview-phone.png";
      }
    });
  }

  const nodePreviewImage = document.querySelector(".ct-preview-image");
  if (nodePreviewImage) {
    const nodeButtonClose = nodePreviewImage.querySelector("button");
    nodeButtonClose.addEventListener("click", (e) => {
      const nodePreviewImage = document.getElementById("preview-image");
      e.preventDefault();
      e.stopPropagation();
      if (nodeInputFile.files[0]) {
        nodeInputFile.value = ''
        const fileListArr = Array.from(nodeInputFile.files);
        fileListArr.splice(0, 1);
        nodePreviewImage.src = "img/preview-phone.png";
      }
    });
    nodePreviewImage.addEventListener("click", () => {
      nodeInputFile.click();
    });
  }
}