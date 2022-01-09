type Props = {
    children: React.ReactNode,
}

const ModalContainer = ({ children }: Props) => (
    <div className="modal__container card">
        {children}
    </div>
)

export default ModalContainer
