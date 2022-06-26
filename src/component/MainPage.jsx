import React, { useState, useEffect } from "react";
import MainCard from "./MainCard";
import "./mainPage.scss";
import ItemService from "../service/ItemService";
import CreateModal from "./CreateModal";
import DeleteModal from "./DeleteModal";

function MainPage() {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState();

  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState();

  const onCancelCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  const onSubmitCreateModal = (item) => {
    const lastId = ItemService.findLastId();
    item.id = lastId + 1;
    item.completed = false;
    items.push(item);
    ItemService.saveLastId(item.id);
    ItemService.saveItems(items);

    setItems(items);
    setIsOpenCreateModal(false);
  };

  const onCancelDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  const onSubmitDeleteModal = () => {
    const filteredItems = items.filter((item) => currentItem.id !== item.id);
    ItemService.saveItems(filteredItems);

    setItems(filteredItems);
    setIsOpenDeleteModal(false);
  };

  const onClickNew = () => {
    setIsOpenCreateModal(true);
  };

  const deleteItem = (item) => {
    setCurrentItem(item);
    setIsOpenDeleteModal(true);
  };

  useEffect(() => {
    const items = ItemService.findItems();
    setItems(items);
  }, []);

  return (
    <div className="app__mainpage">
      <CreateModal
        isOpen={isOpenCreateModal}
        onCancel={onCancelCreateModal}
        onSubmit={onSubmitCreateModal}
      />
      <DeleteModal
        isOpen={isOpenDeleteModal}
        onCancel={onCancelDeleteModal}
        onSubmit={onSubmitDeleteModal}
        text={(
          <span>
            Delete
            {currentItem?.name}
            {" "}
            ?
          </span>
)}
      />
      <MainCard
        items={items}
        onClickNew={onClickNew}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default MainPage;
