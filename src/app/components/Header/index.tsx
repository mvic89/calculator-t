interface HeaderProp {
  pageTitle: string
}

const Header = ({pageTitle}: HeaderProp) => {
  return (
    <header>
      <h1>{pageTitle}</h1>
    </header>
  )
}

export default Header