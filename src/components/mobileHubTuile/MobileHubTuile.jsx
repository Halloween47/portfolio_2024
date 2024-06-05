import { useDispatch } from 'react-redux';
import { showProjets } from '../../store/projetsSlices';

function MobileHubTuile(props) {
  const dispatch = useDispatch();
  const handleClickProjets = (e) => {
    e.preventDefault();
    dispatch(showProjets());
  };
  return (
    <div className="mobile-tuile" onClick={handleClickProjets}>
      {/* <a href="#"> */}
        <img src={props.img} alt="" />
        <p>{props.text}</p>
      {/* </a> */}
    </div>
  );
}
export default MobileHubTuile;
