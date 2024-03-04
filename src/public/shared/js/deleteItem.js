import createFormPost from "./createFormPost.js";

export default (nodesButtonDel) => {
    nodesButtonDel.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
    
          $("#ct-deletePermanetyleModal")
            .modal("show")
            .on("shown.bs.modal", function () {
              var buttonDelete = $(this).find("#button-delete");
              buttonDelete.on("click", function () {
                const prd_id = button.getAttribute("data-prd_id");
                const path = `/admin/products/deleted/${prd_id}?_method=delete`;
                const formDelete = createFormPost("name-delete");
                formDelete.action = path;
                formDelete.submit();
              });
            });
        });
      });
}