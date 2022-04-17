import { useDroppable } from "@dnd-kit/core";
import type { VFC } from "react";

type Props = {
  id: string;
  children: React.ReactNode;
};

export const Droppable: VFC<Props> = ({ id, children, ...props }) => {
  const { setNodeRef } = useDroppable({
    id: id,
    data: {
      type: id,
    },
  });

  return (
    <div ref={setNodeRef} {...props}>
      {children}
    </div>
  );
};
