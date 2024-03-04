const mongoose = require("mongoose");
module.exports = (query) => {
  let filterFormData = {
    status: {
      allStock: {
        id: 1,
        title: "Tất cả",
        is_stock: "all",
      },
      inStock: {
        id: 2,
        title: "Còn hàng",
        is_stock: "true",
      },
      outOfStock: {
        id: 3,
        title: "Hết hàng",
        is_stock: "false",
      },
    },
    find: {},
  };

  const status = filterFormData.status;
  switch (query.is_stock) {
    case status.allStock.is_stock:
      status.allStock.active = "true";
      break;
    case status.inStock.is_stock:
      filterFormData.find.is_stock = status.inStock.is_stock;
      status.inStock.active = "true";
      break;
    case status.outOfStock.is_stock:
      filterFormData.find.is_stock = status.outOfStock.is_stock;
      status.outOfStock.active = "true";
      break;

    default:
      break;
  }

  if (query.cat_id && mongoose.isValidObjectId(query.cat_id)) {
    filterFormData.find.cat_id = query.cat_id;
  }




  if (query.keyword) {
    const keyword = encodeURIComponent(query.keyword);
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedKeyword, "i");
    filterFormData.find.name = regex;
  }
  return filterFormData;
};
