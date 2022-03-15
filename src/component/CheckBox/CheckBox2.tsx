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

type Props = {
  todo: TodoListType;
  title: "today" | "upcoming" | "tomorrow" | undefined;
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

export const CheckBox = ({ todo, title }: Props) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transition,
    transform,
    isDragging,
  } = useSortable({ id: todo.todoId });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    border: "2px solid black",
    marginBottom: 5,
    marginTop: 5,
    opacity: isDragging ? 0.5 : 1,
  };

  const { onCreate, onUpdate, onDelete } = useTodo();
  const { label, color, bg } = ThemeLists[title ?? "today"];

  return (
    <div
      className="group flex items-center p-2 space-x-4"
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <div className="shrink-0 w-7">
        <RadioButton
          color={bg}
          isSelected={todo.todoData.isFinished}
          handleSelected={() =>
            onUpdate(todo.todoId, {
              isFinished: !todo.todoData.isFinished,
            })
          }
        />
      </div>

      <div
        className={cc([
          "ml-2 text-lg flex-1 whitespace-pre-line break-all",
          {
            "text-gray-500 line-through ": todo.todoData.isFinished === true,
          },
        ])}
      >
        {todo.todoData.name}
      </div>
      <div className="hidden group-hover:block shrink-0 group-hover:text-gray-500">
        <div className="flex justify-between items-center space-x-2">
          <button
            type="button"
            onClick={() => onCreate(title ?? "today", todo.todoData.name)}
            title="edit"
            className="flex justify-center items-center"
          >
            <HiOutlineDuplicate className="text-xl " />
          </button>
          <button
            type="button"
            onClick={() => alert("編集したい！！！！")}
            title="edit"
            className="flex justify-center items-center"
          >
            <AiOutlineEdit className="text-xl " />
          </button>
          <button
            type="button"
            onClick={() => onDelete(todo.todoId)}
            title="delete"
            className="flex justify-center items-center"
          >
            <AiOutlineDelete className="text-xl " />
          </button>
        </div>
      </div>
    </div>
  );
};