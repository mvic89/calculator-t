interface HeaderProp {
  pageTitle: string
}

const Header = ({pageTitle}: HeaderProp) => {
  return (
    <header className="text-3xl p-5 text-center uppercase font-bold">
      <h1>{pageTitle}</h1>
    </header>
  )
}

export default Header