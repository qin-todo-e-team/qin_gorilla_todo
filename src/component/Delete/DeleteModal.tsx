import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback } from "react";

type Props = {
  onDelete: () => Promise<void>;
  title: string;
  className?: string;
  children?: React.ReactNode;
};

export const DeleteModal: React.VFC<Props> = ({
  onDelete,
  title,
  className,
  children,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  const handleDelete = useCallback(() => {
    onDelete();
    onClose();
  }, [onDelete, onClose]);

  return (
    <>
      <button onClick={onOpen} title={title} className={className}>
        {children}
      </button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent mx={8} py={8}>
            <AlertDialogBody className="font-bold">
              ToDoを削除してよろしいですか？
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="red" onClick={handleDelete}>
                はい
              </Button>
              <Button onClick={onClose} ml={3}>
                いいえ
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
