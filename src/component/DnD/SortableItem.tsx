import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { CSSProperties, VFC } from "react";
import React from "react";

type Props = {
  id: string;
  children: React.ReactNode;
  style: CSSProperties;
  className: string;
};

export const SortableItem: VFC<Props> = ({ id, style, children, ...props }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: id });

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    ...style,
  };

  return (
    <div
      ref={setNodeRef}
      style={styles}
      {...attributes}
      {...listeners}
      {...props}
    >
      {children}
    </div>
  );
};
