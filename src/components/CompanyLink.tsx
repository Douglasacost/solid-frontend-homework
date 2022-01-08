import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Company, ReduxState } from '../types/types'
import { companySelectedId } from '../utils/selectors'
import { setSelectedCompanyId } from '../redux/actions'

type ReduxProps = {
  companySelectedId: number | null,
}

type DispatchProps = {
  setSelectedCompanyId: (id: number) => void,
}

type Props = ReduxProps & Company & DispatchProps

const itemClasses = 'dropdown__section_item dropdown__section_item_company'
const isSelectedClass = (isSelected: boolean) => {
  return isSelected ? `${itemClasses} selected` : itemClasses
}

const CompanyLink = ({ name, id, setSelectedCompanyId, companySelectedId }: Props) => (
  <div role={'button'} onClick={() => setSelectedCompanyId(id)} className={isSelectedClass(companySelectedId === id)}>
    {name}
    {companySelectedId === id && <i className="material-icons-outlined">
      checked
    </i>}
  </div>
)


export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companySelectedId,
  }),
  {
    setSelectedCompanyId
  }
)(CompanyLink)
