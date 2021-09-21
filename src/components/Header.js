import logo from '../logo.svg'

function Header() {
  return (
    <header className="App-header">
      <ul>
        <li>
          <a href="#">Teh sofa</a>
        </li>
        <li>
          <a href="#">Reviews</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li>
          <a href="#">Showroom</a>
        </li>
        <li>
          <a href="#">Swatches</a>
        </li>
      </ul>
    </header>
  )
}

export default Header