type Props = {
  text: string,
  icon: string,
  logout?: boolean,
  handleOnClick?: () => void,
}

const MenuLink = ({ icon, text, logout, handleOnClick }: Props) => (
  <div
    onClick={handleOnClick}
    role={'button'}
    className={`dropdown__section_item ${logout ? 'dropdown__section_item_logout' : ''}`}>
    <i className="material-icons-outlined">
      {icon}
    </i>

    {text}
  </div>
)

export default MenuLink
