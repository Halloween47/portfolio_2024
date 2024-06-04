function MobileHubTuile(props) {
  return (
    <div className="mobile-tuile">
      <img src={props.img} alt="" />
      <p>{props.text}</p>
    </div>
  );
}
export default MobileHubTuile;
