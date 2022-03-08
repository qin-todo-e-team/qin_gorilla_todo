import { CheckBox } from "src/component/CheckBox/CheckBox";
import type { Todo } from "src/models/Todo";

type Props = {
  todoList: Todo[];
};

export const TodoList = ({ todoList }: Props) => (
  <>
    <div className="py-2 px-4">
      <CheckBox todoList={todoList} title="today" />
    </div>
  </>
);
