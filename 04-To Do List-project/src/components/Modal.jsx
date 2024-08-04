import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () =>({ 
    open() {
        dialog.current.showModal();
      }
  }));

  return createPortal(
    <>
      <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" ref={dialog}>
        {children}
        <form method="dialog" className="mt-4 text-right">
          <Button>Close</Button>
        </form>
      </dialog>
    </>,
    document.getElementById("modal-root")
  );
});

export default Modal;
