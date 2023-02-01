import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid'

Notiflix.Notify.success('Hello');

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ],
  };
    addContacts = ({ name, number }) => { 
    const contact = { id: nanoid(10), name, number };
    this.setState( prevState  => ({
      contacts: [...prevState.contacts, contact]
    }))
  }
  
  render() {
    const { addContacts } = this;
    const { contacts } = this.state;

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={addContacts} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={ contacts} />
    </div>
  )
}
};