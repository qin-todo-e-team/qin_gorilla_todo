import { RadioButton } from "@component/RadioButton";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useTodo } from "@repo/todo/useTodo";
import cc from "classcat";
import type { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { HiOutlineDuplicate } from "react-icons/hi";
import type { TodoListType } from "src/models/Todo";

import { CheckBox } from "./CheckBox2";

type Props = {
  title: "today" | "upcoming" | "tomorrow" | undefined;
  todoList: TodoListType[];
  children?: React.ReactNode;
};

type ListItem = {
  label: string;
  color: string;
  bg: string;
};

type ThemeListType = {
  today: ListItem;
  tomorrow: ListItem;
  upcoming: ListItem;
};

const ThemeLists: ThemeListType = {
  today: {
    label: "今日する",
    color: "text-rose-500",
    bg: "bg-rose-500",
  },
  tomorrow: {
    label: "明日する",
    color: "text-orange-400",
    bg: "bg-orange-400",
  },
  upcoming: {
    label: "今度する",
    color: "text-amber-400",
    bg: "bg-amber-400",
  },
};

const test = "OK";

export const CheckBoxList = ({ todoList, title }: Props) => {
  // console.log("todoList", todoList);
  const [items, setItems] = useState<TodoListType[]>([...todoList]);
  // console.log("items", items);
  const { onUpdate } = useTodo();
  const { label, color, bg } = ThemeLists[title ?? "today"];
  const sensors = [useSensor(PointerSensor)];
  //console.log(todoList);

  useEffect(() => {
    setItems(todoList);
  }, [todoList]);

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setItems((todos) => {
        // console.log(todos);
        // console.log("active", active);
        // console.log("over", over);
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
    <div className="mb-[70px] w-full">
      <h1 className={cc(["p-2 text-xl font-bold", color])}>{label}</h1>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items?.map((todo) => todo.todoId)}
          strategy={verticalListSortingStrategy}
        >
          <div>
            <div className="flex flex-col">
              {items?.map((todo, index) => (
                <CheckBox title={title} todo={todo} key={index} />
              ))}
            </div>
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};
