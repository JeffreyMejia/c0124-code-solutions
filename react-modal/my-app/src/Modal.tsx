import React, { ReactNode } from 'react';
import { useRef, useEffect } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen === true) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
  }, [modal, isOpen]);

  function handleEscape(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'Escape') {
      onClose();
    }
  }
  return (
    <dialog onKeyDown={handleEscape} ref={modal}>
      {children}
    </dialog>
  );
}
