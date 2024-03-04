// ------------check all--------------
export default () => {
  const nodesCheckAll = document.querySelectorAll('[name="check-all"]');
  if (nodesCheckAll.length > 0) {
    nodesCheckAll.forEach((nodeCheckAll) => {
        const dataToggle = nodeCheckAll.getAttribute('data-toggle')
      const nodesCheckItem = document.querySelectorAll(`[name="check-item"][data-toggle=${dataToggle}]`);
      //-----check Check all------
      nodeCheckAll.addEventListener("click", (e) => {
        if (e.target.checked) {
          nodesCheckItem.forEach((nodeCheckItem) => {
            nodeCheckItem.checked = true;
          });
        } else {
          nodesCheckItem.forEach((nodeCheckItem) => {
            nodeCheckItem.checked = false;
          });
        }
      });
      if (nodesCheckItem.length > 0) {
        const checkItems = [...nodesCheckItem];
        nodesCheckItem.forEach((nodeCheckItem) => {
          nodeCheckItem.addEventListener("click", () => {
            const checkAllItems = checkItems.every(
              (nodeCheckItem) => nodeCheckItem.checked === true
            );
            if (checkAllItems) {
              nodeCheckAll.checked = true;
            } else {
              nodeCheckAll.checked = false;
            }
          });
        });
      }
      //-----End check Check all------

    });
  }
};
