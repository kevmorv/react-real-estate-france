import L from 'leaflet'
import {HouseContext } from '../context/GlobalState'
import {useContext, useEffect, useState, useCallback } from 'react'
import {useMapEvent} from "react-leaflet"
import {fetcher} from '../api'

function  MapController() {
    const {setApptMutation} = useContext(HouseContext);
    const [centerCoordinates, setCenterCoordinates] = useState({lat:0, lng:0})
    const [distance, setDistance] = useState(0)
    const map = useMapEvent('click', (e) => {
      console.log(e.target)
    })
  //   useEffect(async() => {
  //     const endpoint = `https://api.cquest.org/dvf?lat=${centerCoordinates.lat}&lon=${centerCoordinates.lng}&type_local=Appartement&dist=${500}`
  //     const abortCont = new AbortController();
  //     // const { data, error } = useSWR(endpoint, fetcher)
  //     setTimeout(() => {
  //       // const data = fetch(endpoint, { signal: abortCont.signal }).then(res=>res.json())
  //       fetch(endpoint, { signal: abortCont.signal })
  //             .then(res => {
  //               if (!res.ok) { // error coming back from server
  //                 throw Error('could not fetch the data for that resource');
  //               } 
  //               return res.json();
  //             })
  //             .then(data => {
  //               const mutations  = data.features.map((x) => {
  //                 return {
  //                   dateMutation : x.properties['date_mutation'],
  //                   price : x.properties['valeur_fonciere'],
  //                   lat: x.properties['lat'],
  //                   long: x.properties['lon'],
  //                   surface : x.properties['surface_relle_bati'],
  //                   nbrePieces: x.properties['nombre_pieces_principales'],
  //                   address : `${x.properties['numero_voie']} ${x.properties['type_voie']} ${x.properties['voie']} - ${x.properties['commune']}`
  //                 }

  //             })
  //             console.log('number of mutation', mutations.length)
  //             setApptMutation(mutations);

  //           })
  //             .catch(err => {
  //               if (err.name === 'AbortError') {
  //                 console.log('fetch aborted')
  //               } 
  //               else {
  //                 console.log(err.name)
  //                       }
  //               })       }
  //       ,500)

  //     return () => abortCont.abort();
  // }, [centerCoordinates])

  //   const map = useMapEvent('move', () => {
  //     let coordinates = map.getCenter()
  //     let bounds = map.getBounds()
  //     let sw = bounds['_southWest']
  //     let ne = bounds['_northEast']
  //     let distance = parseInt(L.latLng(sw).distanceTo(L.latLng(ne)))
  //     setDistance(distance)
  //     setCenterCoordinates(coordinates)
  //   })
    return null
  };

export default MapController;