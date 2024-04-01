export default interface ICustomOffcanvas {
    title: string;
    content: React.ReactNode;
    show: boolean;

    handleClose: () => void;
}