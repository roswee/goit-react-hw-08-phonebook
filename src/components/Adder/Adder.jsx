import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addContact } from 'redux/phonebook/operations';
import { fetchContacts } from 'redux/phonebook/operations';

export const Adder = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset()

    const nameArray = contacts.map(contact => {
      return contact.name;
    });

    if (nameArray.includes(name)) {
      return alert(`${name} is already in contacts.`);
    }
    return dispatch(
      addContact({
        name,
        number,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="text-white">
      <label className="input-group mb-3 mt-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
        </div>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
        />
      </label>
      <label className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Number</span>
        </div>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
        />
      </label>
      <button type="submit" style={{width:"100%"}} className="btn btn-success">Add contact</button>
    </form>
  );
};
