import {useState, useEffect, useContext} from 'react'
import { MapContainer, TileLayer} from "react-leaflet"
import {HouseContext} from '../context/GlobalState'
import MarkerClusterGroup from 'react-leaflet-markercluster';
// Styles
import SideBar from './SideBar/SideBar';
import MutationMarker from './MutationMarker/Marker'
import MapController from './MapController'
//api
import {fetchMutation} from '../api'


const Map = () => {
  const {addressChosen, apptMutation, setApptMutation} = useContext(HouseContext);
  const [centerCoordinates, setCenterCoordinates] = useState([])

  useEffect(async () => {
    let mutations = await fetchMutation(addressChosen.lat, addressChosen.long, 'Appartement', 1500)
    setCenterCoordinates([addressChosen.lat, addressChosen.long])
    setApptMutation(mutations)
    }, [addressChosen]
  );

  return (
    <>
      {centerCoordinates.length>0 ?
        <>
          <MapContainer 
            center={centerCoordinates} 
            zoom={18}
            >
            <MapController/>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <MarkerClusterGroup>
                {apptMutation.map(mutation=> 
                      <MutationMarker mutation={mutation}/>
                  )}
            </MarkerClusterGroup>
          </MapContainer>
          <SideBar>Hello</SideBar>
        </>
              :null}
    </>)
            
}

export default Map;
