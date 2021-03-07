import { GeoJSON } from "leaflet";

export const fetchIris = async (address) => {
  const endpoint = `https://pyris.datajazz.io/api/coords?geojson=true&lat=${address.lat}&lon=${address.long}`;
  let data = await (await fetch(endpoint)).json();
  data = {
    ...data,
    geometry: {
      type: data.geometry.type,
      coordinates: [GeoJSON.coordsToLatLngs(data.geometry.coordinates[0][0])],
    },
  };
  console.log(data);
  return { ...data };
};

export const fetchAddress = async (address, limit) => {
  const endpoint = `https://api-adresse.data.gouv.fr/search/?q=${address}&limit=${limit}`;
  const data = await (await fetch(endpoint)).json();
  const addresses = data.features.map((x) => {
    return {
      label: x.properties["label"],
      score: x.properties["score"],
      housenumber: x.properties["housenumber"],
      id: x.properties["id"],
      context: x.properties["context"],
      lat: x.geometry.coordinates[1],
      long: x.geometry.coordinates[0],
    };
  });
  return addresses;
};

export const fetchMutation = async (lat, long, type, dist) => {
  if ((lat !== undefined) & (long !== undefined)) {
    const endpoint = `https://api.cquest.org/dvf?lat=${lat}&lon=${long}&type_local=${type}&dist=${dist}`;
    // const { error, isPending, data} = useFetch('endpoint')
    const data = await (await fetch(endpoint)).json();
    console.log("number of mutation", data.features.length);
    const mutations = data.features.map((x) => {
      return {
        dateMutation: x.properties["date_mutation"],
        price: x.properties["valeur_fonciere"],
        lat: x.properties["lat"],
        long: x.properties["lon"],
        surface: x.properties["surface_relle_bati"],
        nbrePieces: String(x.properties["nombre_pieces_principales"]),
        address: `${x.properties["numero_voie"]} ${x.properties["type_voie"]} ${x.properties["voie"]} - ${x.properties["commune"]}`,
        numero_plan: x.properties["numero_plan"],
      };
    });
    // const mySet = new Set(mutations)
    return mutations;
  } else {
    console.log("Error fetching MUtaion");
  }
};
