import type { DragEndEvent } from "@dnd-kit/core";
import { closestCenter } from "@dnd-kit/core";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import type { DocumentData } from "firebase/firestore";
import { CheckBoxList } from "src/component/CheckBox/CheckBoxList2";
import { TodoFilter } from "src/lib/TodoFilter";
import type { TodoListType } from "src/models/Todo";

type Props = {
  todoList: TodoListType[] | undefined;
};

export const TodoList = ({ todoList }: Props) => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5, // 5px ドラッグした時にソート機能を有効にする
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: 5, // 5px ドラッグした時にソート機能を有効にする
    },
  });
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, keyboardSensor, touchSensor);
  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    console.log("active", active);
    console.log("over", over);
    if (active.id !== over.id) {
      setItems((todos) => {
        const oldIndex = todos.findIndex(
          (todo, index) => todo.todoId === active.id
        );
        const newIndex = todos.findIndex(
          (todo, index) => todo.todoId === over.id
        );
        const overItemDate = todos[newIndex].todoData?.expire;
        overItemDate?.setSeconds(overItemDate?.getSeconds() + 1);
        console.log("overItemDate", overItemDate);
        onUpdate(active.id, {
          expire: overItemDate,
        });
        return arrayMove(todos, oldIndex, newIndex);
      });
    }
  };
  return (
    <>
      <div className="py-2 px-4">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <CheckBoxList
            todoList={TodoFilter(todoList, "today")}
            title="today"
          />
          <CheckBoxList
            todoList={TodoFilter(todoList, "tomorrow")}
            title="tomorrow"
          />
          <CheckBoxList
            todoList={TodoFilter(todoList, "upcoming")}
            title="upcoming"
          />
        </DndContext>
      </div>
    </>
  );
};
