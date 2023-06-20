import "./style.css"

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="totalMonth">
        <h4>Total this month</h4>
        <span className="price">$ 478.33</span>
      </div>
      
      <div className="fromLastMonth">
        <span>+2.4%</span>
        <h4>from last month</h4>
      </div>
    </div>
  );
};
