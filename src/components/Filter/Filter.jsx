import { useDispatch } from 'react-redux'
import { setFilter } from 'redux/phonebook/filterSlice';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  
  const handleFinder = e => {
    const input = document.querySelector('input[data-action="setFilter"]');
    console.log(input.value)
    const value = input.value.toLowerCase();
    console.log(value)
    dispatch(setFilter(value))
    console.log(filter)
  }

        return (
          <>
          Find contacts by name 
              <input name="filter" onChange={handleFinder} data-action="setFilter"></input>
          </>

        )
    }

