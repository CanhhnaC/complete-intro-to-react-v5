import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
<<<<<<< HEAD
    const elRef = useRef(null)

}
=======
    const elRef = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        modalRoot.appendChild(elRef.current);
        return () => modalRoot.removeChild(elRef.current);
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
>>>>>>> 297a09f609ea238e8fadf760c114e28139417b36
