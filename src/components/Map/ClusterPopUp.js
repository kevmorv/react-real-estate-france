import { Marker, Tooltip } from "react-leaflet";
import L from "leaflet"

const ClusterPopUp = ({ position }) => {
  let popupOptions = {
    setLatLng: position,
  };
  let icon = L.divIcon({
    className: 'ship-div-icon',
    html: '<svg>...</svg>'
})
  return (
    <Marker 
    icon= {icon}
     position={position}>
      <Tooltip permanent>
        <h1>Hello world</h1>
      </Tooltip>
    </Marker>
  );
};
export default ClusterPopUp;
