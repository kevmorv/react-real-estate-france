import { Tooltip, Popup, CircleMarker } from "react-leaflet";

const MutationMarker = ({ mutation }) => {
  return (
    <CircleMarker
      eventHandlers={{
        click: () => {
          console.log("marker clicked");
        },
      }}
      center={[mutation.lat, mutation.long]}
      radius={10}
      fillOpacity={1}
    >
      <Popup>
        <p>{mutation.address}</p>
        <p>
          Appartement-{mutation.nbrePieces} rooms-{mutation.surface}m²
        </p>
        <p>
          <b>{mutation.price} €</b>
          Sold the {mutation.dateMutation}
        </p>
        {/* <p># plan: {mutation.numero_plan}</p> */}
      </Popup>
      <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
        {mutation.price / 1000} K
      </Tooltip>
    </CircleMarker>
  );
};

export default MutationMarker;
