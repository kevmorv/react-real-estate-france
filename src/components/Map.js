import { useState, useEffect, useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { HouseContext } from "../context/GlobalState";
import MarkerClusterGroup from "react-leaflet-markercluster";

// Styles
import { CircularProgress } from "@material-ui/core";
import SideBar from "./SideBar/SideBar";
import MutationMarker from "./MutationMarker/Marker";
import MapController from "./MapController";
//api
import { fetchMutation} from "../api";

const Map = () => {
  const {
    addressChosen,
    apptMutation,
    setApptMutation,
    visibleMutations,
    setVisibleMutations,
  } = useContext(HouseContext);

  const [centerCoordinates, setCenterCoordinates] = useState([]);
  useEffect(async () => {
    let mutations = await fetchMutation(
      addressChosen.lat,
      addressChosen.long,
      "Appartement",
      500
    );

    setCenterCoordinates([addressChosen.lat, addressChosen.long]);
    setApptMutation(mutations);
    setVisibleMutations(mutations);
  }, [addressChosen]);

  return (
    <>
      {visibleMutations.length > 0 ? (
        <>
          <MapContainer center={centerCoordinates} zoom={18}>
            {/* <MapController centerCoordinates={centerCoordinates}/> */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <MarkerClusterGroup
              eventHandlers={{
                clusterclick: (cluster) => {
                  console.log(cluster.layer.getChildCount());
                },
                spiderfied: (cluster, markers) => {
                  console.log(cluster.cluster);
                },
              }}
            >
              {visibleMutations.map((mutation) => (
                <MutationMarker mutation={mutation} />
              ))}
            </MarkerClusterGroup>
          </MapContainer>
          {/* <SideBar>Hello</SideBar> */}
        </>
      ) : (
        <div style={{display:'grid', alignItems:"center", height:"100vh", justifyContent:"center"}}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Map;
