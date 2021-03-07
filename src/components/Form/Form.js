import {useEffect, useState, useContext, useReducer} from 'react'
import Modal from '@material-ui/core/Modal';

import { HouseContext } from "../../context/GlobalState";
import formReducer from '../../reducers/formReducer'

import CheckBoxInput from './CheckBoxInput'
import SliderInput from './SliderInput'

const Form = ({open, handleClose})=>{
    const initialFormState = {
        surface: [0,200],
        price: [0,10e7],
        nbrePieces:[],
        typeProperties:[]
    }

    const [formState, dispatch] = useReducer(formReducer, initialFormState)
    const {apptMutation, setVisibleMutations} = useContext(HouseContext)
    const {surface, typeProperties, price, nbrePieces} = formState;
    const [resultFiltering, setResultFiltering] = useState([])
    // useEffect(()=>console.log('reenter'), [])
    useEffect(()=>{
        console.log('ha')
        let filterNbrePieces;
        nbrePieces.length===0 ? 
            filterNbrePieces=["1","2","3", "4", "5"] : 
            filterNbrePieces=nbrePieces
        const newMutation = apptMutation.filter(appt =>  
            (appt.surface>surface[0])&
            (appt.surface<surface[1])&
            (appt.price>price[0])&
            (appt.price<price[1])&
            (filterNbrePieces.includes(appt.nbrePieces))
        )
        setVisibleMutations(newMutation);
    }, [formState])

    const updateFormState = (name, value) => {
        console.log(formState)
        dispatch({
            type:"UPDATE TEXT",
            field: name,
            payload: value
        });
    };

    const formStyle= {position:'absolute',
        top: '10vh',
        right:'40%',
        width: '26.6666666667rem',
        zIndex: '300000000',
        backgroundColor:'#fff',
        padding:"10px",
        lineHeight:"30px",
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 6px 0px',
        display:'grid',
        alignItems:'center'
        }

    
    

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
  
            <form 
            // onChange={console.log('Change')}
                style={formStyle}>
                <CheckBoxInput title={'Properties type'} 
                    options={['House','Apartment']}
                    value={typeProperties}
                    updateFormState={updateFormState}
                    />
                <CheckBoxInput title={'Number of rooms'} 
                    options={['1', '2', '3', '4', '5']}
                    value={nbrePieces}
                    updateFormState={updateFormState}
                    />
                <SliderInput 
                    range={[25000, 1900000]} 
                    step={20000} 
                    value={price}
                    updateFormState={updateFormState}
                    title={'Price'}/>
                <SliderInput 
                    range={[10, 200]} 
                    step={5} 
                    value={surface}
                    updateFormState={updateFormState}
                    title={'Surface'}/>               
            </form>
        </Modal>

    )
}
export default Form;