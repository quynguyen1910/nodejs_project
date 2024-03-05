import searchParams from "./searchParams.js";
import searchByForm from "./searchByForm.js";
const pagination = () => {
  const nodesPagination = document.querySelectorAll("[pagination-page]");
  const nodeFormQuery = document.querySelector('form[form-params="page"]');
  if (nodeFormQuery) {
    searchByForm(nodeFormQuery, ["page"]);
  }
  if (nodesPagination.length) {
    nodesPagination.forEach((node) => {
      node.addEventListener("click", (e) => {
        const page = +e.target.getAttribute("pagination-page");
        if (page) {
          searchParams({ page: page });
        }
      });
    });
  }
};
// pagination();
export default pagination;
