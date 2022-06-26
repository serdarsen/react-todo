const ITEMS_LOCAL_STORAGE_LAST_ID_NAME = "items-local-storage-last-id";
const ITEMS_LOCAL_STORAGE_DATA_NAME = "items-local-storage-data";

const ItemService = {
  findItems: () => {
    const json = localStorage.getItem(ITEMS_LOCAL_STORAGE_DATA_NAME);
    const notes = json ? JSON.parse(json) : [];

    return notes;
  },
  saveItems: (items) => {
    const json = JSON.stringify(items);
    localStorage.setItem(ITEMS_LOCAL_STORAGE_DATA_NAME, json);
  },
  saveLastId: (lastId) => {
    localStorage.setItem(ITEMS_LOCAL_STORAGE_LAST_ID_NAME, lastId);
  },
  findLastId: () => {
    let lastId = localStorage.getItem(ITEMS_LOCAL_STORAGE_LAST_ID_NAME);

    if (!lastId) {
      lastId = 0;
    }

    return parseInt(lastId, 10);
  },
};

export default ItemService;
