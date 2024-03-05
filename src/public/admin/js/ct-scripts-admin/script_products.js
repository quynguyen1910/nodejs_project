import changeStatus from "../../../shared/js/changeStatus.js";
import filterForm from "../../../shared/js/filterForm.js";
import checkAllItems from "../../../shared/js/checkAllItems.js";
import selectBoxCustom from "../../../shared/js/selectBoxCustom.js";
import changeStatusMulti from "../../../shared/js/changeStatusMulti.js";
import deleteItem from "../../../shared/js/deleteItem.js";
import pagination from "../../../shared/js/pagination.js";


document.addEventListener("DOMContentLoaded", start);
function start() {
  //-------check box custom----------
  selectBoxCustom();
  checkAllItems();
  // ------------filter--------------
  const nodeFormQuery = document.querySelector('form[form-params="filter"]');
  const paramsArr = ["is_stock", "cat_id", "keyword"];
  filterForm(nodeFormQuery, paramsArr);
  // ------------change status--------------
  const nodesChangeStatus = document.querySelectorAll(
    "[data-is_stock][data-prd_id]"
  );
  changeStatus(nodesChangeStatus);

  //------------change status multi---------

  const nodeButtonForm = document.querySelector(
    "form button[change-status-multi]"
  );
  changeStatusMulti(nodeButtonForm);
  //------------delete item---------
  const nodesButtonDel = document.querySelectorAll("[button-delete]");
  deleteItem(nodesButtonDel);
  //-------pagination---------
  pagination()
}
