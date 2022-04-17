import { Droppable } from "@component/DnD/Droppable";
import { RadioButton } from "@component/RadioButton";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
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

import { CheckBox } from "./CheckBox3";

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

export const CheckBoxList = ({ todoList, title }: Props) => {
  const [items, setItems] = useState<TodoListType[]>([...todoList]);
  const { onUpdate } = useTodo();
  const { label, color, bg } = ThemeLists[title ?? "today"];

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

  useEffect(() => {
    setItems(todoList);
  }, [todoList]);

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    console.log("active", active);
    console.log("over", over);
  };

  // const handleDragEnd = ({ active, over }: DragEndEvent) => {
  //   if (active.id !== over.id) {
  //     setItems((todos) => {
  //       const oldIndex = todos.findIndex(
  //         (todo, index) => todo.todoId === active.id
  //       );
  //       const newIndex = todos.findIndex(
  //         (todo, index) => todo.todoId === over.id
  //       );
  //       const overItemDate = todos[newIndex].todoData?.expire;
  //       overItemDate?.setSeconds(overItemDate?.getSeconds() + 1);
  //       console.log("overItemDate", overItemDate);
  //       onUpdate(active.id, {
  //         expire: overItemDate,
  //       });
  //       return arrayMove(todos, oldIndex, newIndex);
  //     });
  //   }
  // };

  return (
    <Droppable id={title || "today"}>
      <div className="mb-[70px] w-full">
        <h1 className={cc(["p-2 text-xl font-bold", color])}>{label}</h1>

        <div>
          <div className="flex flex-col">
            <SortableContext
              items={items?.map((todo) => todo.todoId)}
              strategy={verticalListSortingStrategy}
            >
              {items?.map((todo, index) => (
                <CheckBox title={title} todo={todo} key={index} />
              ))}
            </SortableContext>
          </div>
        </div>
      </div>
    </Droppable>
  );
};
