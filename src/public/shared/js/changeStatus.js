import createFormPost from "./createFormPost.js";

export default (nodesChangeStatus) => {
  const formChangeStatus = createFormPost("change-status")
  if (nodesChangeStatus.length) {
    const changeStatus = (e) => {
      const statusCurrent = e.target.getAttribute("data-is_stock");
      const prd_id = e.target.getAttribute("data-prd_id");
      if (formChangeStatus) {
        const statusChange = statusCurrent == "true" ? "false" : "true";
        const path = `/admin/products/change-status/${prd_id}/${statusChange}?_method=PATCH`;
        formChangeStatus.action = path;
        formChangeStatus.submit();
      }
    };
    nodesChangeStatus.forEach((node) => {
      node.addEventListener("click", changeStatus);
    });
  }
};
