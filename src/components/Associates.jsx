import "../Sass/associate.scss";
import Associates_1_logo from '../assets/associates_1.png'
import Associates_2_logo from '../assets/associates_2.png'
import Associates_3_logo from '../assets/associates_3.png'
import Associates_4_logo from '../assets/associates_4.png'
import Associates_5_logo from '../assets/associates_5.png'
export default function Associates() {
  return (
    <div className="associates">
      
        <img src={Associates_1_logo} alt="associates_1" />
        <img src={Associates_2_logo} alt="associates_2" />
        <img src={Associates_3_logo} alt="associates_3" />
        <img src={Associates_4_logo} alt="associates_4" />
        <img src={Associates_5_logo} alt="associates_5" />
     
    </div>
  );
}
