type Props = {
    children: React.ReactNode,
}

const ModalContent = ({ children }: Props) => (
    <div className="modal__content">
        {children}
    </div>
)

export default ModalContent
