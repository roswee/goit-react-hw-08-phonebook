import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, removeContact } from 'redux/phonebook/operations';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.isLoading);
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = () => {
    if (filter === undefined) {return contacts}
    else {
      const data = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
      return data;
    }
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <b>Loading contacts...</b>}
      {contacts.length === 0 ? (
        <p className="text-white">Add some contact to see them.</p>
      ) : (
        <ul className="text-white list-group list-group-flush">
          {filteredContacts().map(contact =>
          (
            <li className="list-group-item m-1" style={{maxWidth: "350px"}} key={contact.id}>
              {contact.name}: {contact.phone}{' '}
              <button
                type="submit"
                onClick={() => dispatch(removeContact(contact.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactsList;
