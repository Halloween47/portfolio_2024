import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideOverlay } from "../../store/overlaySlice";

function Overlay() {
  const overlayRef = useRef(null);

  const overlay = useSelector((state) => state.overlay.overlayState);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        dispatch(hideOverlay())    
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="overlay">
        <div className="overlay_content" ref={overlayRef}> test</div>
      </div>
    </>
  );
}
export default Overlay;
