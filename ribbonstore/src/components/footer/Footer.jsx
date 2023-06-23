import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
       
        </ul>
      
        <ul className="fList">
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
         
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Refund</li>

        
        </ul>
        <ul className="fList">
       
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 Ribbon.Inc </div>
    </div>
  );
};

export default Footer;