export interface ModalProps {
    isOpen: boolean;
    toggle: ModalToggle;
    autoFocus?: boolean;
    size?: string;
    keyboard?: boolean;
    backdrop?: boolean | "static";
    scrollable?: boolean;
    onEnter?: () => void;
    onExit?: () => void;
    onOpened?: () => void;
    onClosed?: () => void;
    wrapClassName?: string;
    modalClassName?: string;
    backdropClassName?: string;
    contentClassName?: string;
    zIndex?: number | string;
    fade?: boolean;
    centered?: boolean;
    fullscreen?: boolean | "sm" | "md" | "lg" | "xl";
    external?: React.ReactNode;
    labelledBy?: string;
    unmountOnClose?: boolean;
    returnFocusAfterClose?: boolean;
    container?: string | HTMLElement | React.RefObject<HTMLElement>;
    innerRef?: React.Ref<HTMLElement>;
    trapFocus?: boolean;
}

export type ModalToggle = (value?: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

