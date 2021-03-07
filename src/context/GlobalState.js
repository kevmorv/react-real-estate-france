import React, {useEffect, useState} from 'react'
// import {mutationReducer} from './reducers'

export const HouseContext = React.createContext()

const GlobalState = (props) =>{
    const [houseMutation, setHouseMutation] = useState([])
    const [apptMutation, setApptMutation] = useState([])
    const [addressChosen, setAddressChosen] = useState({})
    const [visibleMutations, setVisibleMutations] = useState([])

    return (
        <HouseContext.Provider 
            value={{
                addressChosen:addressChosen,
                setAddressChosen: setAddressChosen,
                apptMutation:apptMutation,
                setApptMutation:setApptMutation,
                visibleMutations, 
                setVisibleMutations

            }}
        >
            {props.children}
        </HouseContext.Provider>
    );
}

export default GlobalState;
