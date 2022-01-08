import ReactDOM from 'react-dom'

const modalRootEl = document.getElementById('modal-root')

type Props = {
    open: boolean,
    children: React.ReactNode,
}

const Modal = ({
    children,
    open = false
}: Props) => {
    if (!open || !modalRootEl) return null

    return ReactDOM.createPortal(<>
    {open && <div className='backdrop'></div>}
    <div className={`modal ${open ? 'modal__open' : ''}`}>
        {children}
    </div>
    </>, modalRootEl)
}

export default Modal
