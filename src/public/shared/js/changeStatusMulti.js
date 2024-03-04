import showAlert from "../../shared/js/showAlert.js";
export default (nodeButtonForm) => {
  if (nodeButtonForm) {
    nodeButtonForm.addEventListener("click", (e) => {
      e.preventDefault();
      const dataToggle = "change-status";
      const nodesCheckItem = document.querySelectorAll(
        `[name="check-item"][data-toggle=${dataToggle}]:checked`
      );
      if (nodesCheckItem.length > 0) {
        const nodeForm = nodeButtonForm.parentNode;
        const nodeInputForm = document.querySelector(
          "form input[name='prd_ids']"
        );
        const prd_ids = [];
        nodesCheckItem.forEach((node) => {
          const prd_id = node.getAttribute("data-prd_id");
          prd_ids.push(prd_id);
        });
        nodeInputForm.value = prd_ids.join(",");

        const formFields = [
          ...nodeForm.querySelectorAll(
            "input:not([name='prd_ids']), select, textarea"
          ),
        ];
        const checkValue = formFields.some(
          (field) => field.value !== "" && field.value !== "disabled"
        );
        if (checkValue) {
          nodeForm.submit();
        } else {
          showAlert("Lựa chọn Chỉnh sửa!", "alert-danger");
        }
      } else {
        nodeButtonForm.classList.add("ct-click-disabled");

        showAlert("Lựa chọn sản phẩm!", "alert-danger");
        setTimeout(() => {
          nodeButtonForm.classList.remove("ct-click-disabled");
        }, 1000);
        return;
      }
    });
  }
};
