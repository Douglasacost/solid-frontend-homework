import { connect } from 'react-redux';
import { setModalVisibility } from '../../redux/actions';

type Props = {
    text: string,
    setModalVisibility: (isVisible: boolean) => void,
}

const ModalHeader = ({ text, setModalVisibility }: Props) => (
    <div className="modal__header">
        {text}
        <button onClick={() => setModalVisibility(false)} className="button button__circle"> 
            <i className="material-icons-outlined">
                close
            </i>
        </button>
    </div>
)

export default connect(
  null,
  { setModalVisibility }
)(ModalHeader)
