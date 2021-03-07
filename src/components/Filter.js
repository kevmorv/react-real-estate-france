import {useState} from 'react'

import {BiFilter} from 'react-icons/bi'

//styles
import {FilterButton} from './Filter.styles'

import Form from './Form/Form'

const Filter = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <FilterButton onClick={handleOpen}>
          Filters <BiFilter/>
      </FilterButton >
      <Form open={open} handleClose={handleClose}/>
    </div>
  )
};
export default Filter;
