import React from "react";
import { ModalToggle } from "../interfaces/Global";

export const useModal = (defaultOpen = false): [boolean, ModalToggle] => {
    const [isOpen, setIsOpen] = React.useState<boolean>(defaultOpen);

    function removeBodyCss() {
        document.body.classList.add("no_padding");
    }

    function collapseModal(value?: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (value !== undefined && typeof value === "boolean") {
            setIsOpen(value);
        } else {
            setIsOpen((prevOpen) => !prevOpen);
        }
        removeBodyCss();
    }

    return [isOpen, collapseModal];
};

export default useModal;