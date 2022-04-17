import { useDraggable } from "@dnd-kit/core";
import type { VFC } from "react";

type Props = {
  id: string;
  children: React.ReactNode;
};

export const Draggable: VFC<Props> = ({ id, children, ...props }) => {
  const { setNodeRef } = useDraggable({
    id: id,
    data: {
      supports: ["today", "tomorrow", "upcoming"],
    },
  });

  return (
    <div ref={setNodeRef} {...props}>
      {children}
    </div>
  );
};
