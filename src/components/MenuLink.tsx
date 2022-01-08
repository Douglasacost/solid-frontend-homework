type Props = {
  text: string,
  icon: string,
  logout?: boolean,
}

const MenuLink = ({ icon, text, logout }: Props) => (
  <div className={`dropdown__section_item ${logout ? 'dropdown__section_item_logout' : ''}`}>
    <i className="material-icons-outlined">
      {icon}
    </i>

    {text}
  </div>
)

export default MenuLink
