import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import Notiflix from 'notiflix';

Notiflix.Notify.success('Hello');

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
}
  
  
  render() {
  return (
    <div>
      <h1>Phonebook</h1>
        <ContactForm />
      <h2>Contacts</h2>
      <Filter />
    </div>
  )
}
};
