import { Adder } from 'components/Adder/Adder';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export default function PhonebookPage() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center">
      <h1 className="nav text-white justify-content-center">Phonebook</h1>
      <Adder />
      <Filter/>
      <ContactsList />
    </div>
  );
};