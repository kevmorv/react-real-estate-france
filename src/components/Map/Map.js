import { useState, useEffect, useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { HouseContext } from "../../context/GlobalState";
import MarkerClusterGroup from "react-leaflet-markercluster";
import ClusterPopUp from "./ClusterPopUp";

// Styles
import { CircularProgress } from "@material-ui/core";
import SideBar from "../SideBar/SideBar";
import MutationMarker from "./Marker";
import MapController from "../MapController";
//api
import { fetchMutation } from "../../api";
// import { MarkerClusterGroup } from "leaflet";x

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
  let markerClusterOptions ={
    // spiderfyOnMaxZoom:false,
    // showCoverageOnHover:false,
    // zoomToBoundsOnClick:false
  }

  const [popupPosition, setPopupPosition] = useState({lat:45,lng:0})

  return (
    <>
      {visibleMutations.length > 0 ? (
        <>
          <MapContainer center={centerCoordinates} zoom={18}>
            {/* <MapController centerCoordinates={centerCoordinates}/> */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <MarkerClusterGroup
              // {...markerClusterOptions}
              
              eventHandlers={{
                clusterclick: (cluster) => {
                  setPopupPosition(cluster.layer._latlng)
                },
                clustermouseover: (cluster) =>{
                  console.log('hovered')
                  setPopupPosition(cluster.layer._latlng)
                },
                clustermouseout: (cluster) =>{
                  console.log('unhoverd')
                  setPopupPosition({lat:45,lng:0})
                }
              }}
            >
              {visibleMutations.map((mutation) => (
                <MutationMarker key={mutation.id} mutation={mutation} />
              ))}
            </MarkerClusterGroup>
            <ClusterPopUp position={popupPosition}/>
          </MapContainer>
          {/* <SideBar>Hello</SideBar> */}
        </>
      ) : (
        <div
          style={{
            display: "grid",
            alignItems: "center",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Map;
