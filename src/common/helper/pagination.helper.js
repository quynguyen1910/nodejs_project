module.exports = (itemsAll, pageQuery) => {
  const paginationData = {
    page: 1,
    limit: 5,
    skip: 0,
    delta: 2,
    pagination: [],
    itemsAll
  };
  paginationData.pages = Math.ceil(itemsAll / paginationData.limit);

  if (pageQuery) {
    pageQuery = parseInt(pageQuery)
    paginationData.page = pageQuery;
    paginationData.skip = (pageQuery - 1) * paginationData.limit;
    const right = pageQuery + paginationData.delta;
    const left = pageQuery - paginationData.delta;
    for (let page = 1; page <= paginationData.pages; page++) {
      if (
        page <= 1 + paginationData.delta ||
        page >= paginationData.pages - paginationData.delta ||
        (page >= left && page <= right)
      ) {
        paginationData.pagination.push(page);
      } else if (page === left - 1 || page === right + 1) {
        paginationData.pagination.push("...");
      }
    }
  } else {
    const haflPage = Math.ceil(paginationData.pages / 2);
    const right = haflPage + paginationData.delta;
    const left = haflPage - paginationData.delta;
    for (let page = 1; page <= paginationData.pages; page++) {
      if (
        page <= 1 + paginationData.delta ||
        page >= paginationData.pages - paginationData.delta ||
        (page >= left && page <= right)
      ) {
        paginationData.pagination.push(page);
      } else if (page === right + 1 || page === left - 1) {
        paginationData.pagination.push("...");
      }
    }
  }
  return paginationData;
};
