import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { setModalVisibility } from '../../redux/actions';

const modalRootEl = document.getElementById('modal-root')

type Props = {
    open: boolean,
    children: React.ReactNode,
    setModalVisibility: (isVisible: boolean) => void,
}

const Modal = ({
    children,
    open = false,
    setModalVisibility
}: Props) => {
    if (!open || !modalRootEl) return null

    return ReactDOM.createPortal(<>
        {open && <div onClick={() => setModalVisibility(false)} className='backdrop'></div>}
        <div className={`modal ${open ? 'modal__open' : ''}`}>
            {children}
        </div>
    </>, modalRootEl)
}

export default connect(
    null,
    { setModalVisibility }
)(Modal)
