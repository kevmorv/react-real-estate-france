import L from 'leaflet'
import {HouseContext } from '../context/GlobalState'
import {useContext, useEffect, useState } from 'react'
import {useMapEvent} from "react-leaflet"
import {fetchMutation} from '../api'
import useFetch from '../hooks/useFetch'

function  MapController() {
    const {setApptMutation} = useContext(HouseContext);
    const [centerCoordinates, setCenterCoordinates] = useState({lat:0, lng:0})
    const [distance, setDistance] = useState(0)
    // const endpoint = `https://api.cquest.org/dvf?lat=${centerCoordinates.lat}&lon=${centerCoordinates.lng}&type_local=Appartement&dist=${distance}`
    // const { error, isPending, data} = useFetch(endpoint)
    // if (data !==null &data.features.length>0){
    //   const mutations  = data.features.map((x) => {
    //     return {
    //       dateMutation : x.properties['date_mutation'],
    //       price : x.properties['valeur_fonciere'],
    //       lat: x.properties['lat'],
    //       long: x.properties['lon'],
    //       surface : x.properties['surface_relle_bati'],
    //       nbrePieces: x.properties['nombre_pieces_principales'],
    //       address : `${x.properties['numero_voie']} ${x.properties['type_voie']} ${x.properties['voie']} - ${x.properties['commune']}`
    //     }
    //      })
    //   setApptMutation(mutations)
    // }


    const map = useMapEvent('move', () => {
      let coordinates = map.getCenter()
      let bounds = map.getBounds()
      let sw = bounds['_southWest']
      let ne = bounds['_northEast']
      let distance = parseInt(L.latLng(sw).distanceTo(L.latLng(ne)))
      setDistance(distance)
      setCenterCoordinates(coordinates)
    })
    return null
  };

export default MapController;