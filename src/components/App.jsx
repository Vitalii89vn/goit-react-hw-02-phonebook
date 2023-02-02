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
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };
  
  addContacts = ({ name, number }) => { 
    const contact = { id: nanoid(10), name, number };
    const { contacts } = this.state
   
      // if (contact.name === contacts.name) {
      //  alert(` ${name} is already in contacts`);
      //   return
        
      // }
      // else {
        this.setState( prevState  => ({
      contacts: [...prevState.contacts, contact]
        }))
      // }
      
 
    
  }
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
     }))
  }

  filterContacts = e => {
  this.setState({filter: e.currentTarget.value})
}

  render() {
    const { addContacts, deleteContact, filterContacts } = this;
    const { contacts, filter } = this.state;
    
    const normalizedFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(
      contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={addContacts} />
      <h2>Contacts</h2>
      <Filter onFilter={filterContacts} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
    </div>
  )
}
};
