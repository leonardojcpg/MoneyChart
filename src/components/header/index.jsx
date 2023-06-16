import "./styles.css"

export const Header = () => {
    return (
        <header className="header-container">
        <div className="myBalance">
          <h4>My Balance</h4>
          <span>$921.48</span>
        </div>
        <div className="toggleButton">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </header>
    )
}