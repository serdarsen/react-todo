import { useState, useEffect } from "react";
import MainCard from "../card/MainCard";
import "./mainPage.scss";
import ItemService from "../../service/ItemService";
import CreateModal from "../modal/CreateModal";
import DeleteModal from "../modal/DeleteModal";

const MainPage = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState();

  const [items, setItems] = useState([]);

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

  const deleteAllCompleted = () => {
    const updatedItems = items.filter((item) => !item.completed);
    ItemService.saveItems(updatedItems);
    setItems(updatedItems);
  };

  const toggleCompleted = (itemId) => {
    const updatedItems = items.map((item) => {
      if (itemId === item.id) {
        item.completed = !item.completed;
      }

      return item;
    });

    ItemService.saveItems(updatedItems);
    setItems(updatedItems);
  };

  const onCancelDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  const onSubmitDeleteModal = () => {
    deleteAllCompleted();
    setIsOpenDeleteModal(false);
  };

  const onClickNew = () => {
    setIsOpenCreateModal(true);
  };

  const onClickTodoItem = (itemId) => {
    toggleCompleted(itemId);
  };

  const onClickDeleteAllCompleted = () => {
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
        text="Delete all completed?"
      />
      <MainCard
        items={items}
        onClickNew={onClickNew}
        onClickTodoItem={onClickTodoItem}
        onClickDeleteAllCompleted={onClickDeleteAllCompleted}
      />
    </div>
  );
};

export default MainPage;
