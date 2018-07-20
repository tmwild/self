import Link from 'next/link'

class Header extends React.Component {
  constructor(props) {
    super(props);

    const emojis = [`🐵`, `🙈`, `🙊`, `🙉`]
    this.emoji = emojis[Math.floor(Math.random() * 4) + 1]
  }

  
  render() {
    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info">
      <div className="container">
        <a className="navbar-brand" href="/" style={{fontSize: 50}}>
          {this.emoji}
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse justify-content-end" id="navbarsExample04">
          <ul className="navbar-nav mr-1">
            <li className="nav-item">
              <Link href="/">
                <a className={this.props.currentPage === 'home' ? 'active nav-link' : 'nav-link'}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dreams">
                <a className={this.props.currentPage === 'dreams' ? 'active nav-link' : 'nav-link'}>Dreams</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/logs">
                <a className={this.props.currentPage === 'logs' ? 'active nav-link' : 'nav-link'}>Log</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/reference">
                <a className={this.props.currentPage === 'reference' ? 'active nav-link' : 'nav-link'}>Reference</a>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
    );
  }
}

export default Header