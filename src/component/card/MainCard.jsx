import Card from "../common/Card";
import DeleteButton from "./DeleteButton";
import Header from "./Header";
import List from "./List";
import "./mainCard.scss";

const MainCard = ({
  items, onClickNew, onClickTodoItem, onClickDeleteAllCompleted,
}) => (
  <div className="app__maincard">
    <Card>
      <Header onClickNew={onClickNew} />
      <List items={items} onClickRow={onClickTodoItem} />
      <DeleteButton onClick={onClickDeleteAllCompleted} />
    </Card>
  </div>
);

export default MainCard;
