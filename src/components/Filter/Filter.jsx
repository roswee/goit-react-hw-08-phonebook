import { useDispatch } from 'react-redux'
import { setFilter } from 'redux/phonebook/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  
  const handleFinder = e => {
    const input = document.querySelector('input[data-action="setFilter"]');
    const value = input.value.toLowerCase();
    dispatch(setFilter(value))
  }

        return (
          <div className="text-white">
          Find contacts by name 
              <input name="filter" onChange={handleFinder} data-action="setFilter" className="m-1"></input>
          </div>

        )
    }

