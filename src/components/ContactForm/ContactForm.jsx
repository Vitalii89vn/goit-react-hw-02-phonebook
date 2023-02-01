import { Component } from "react";
import { nanoid } from 'nanoid'
import css from "./ContactForm.module.css"

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    nameId = nanoid();
    numberId = nanoid();

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmitForm(this.state);
        this.reset();
    };
    
    reset = () => {
        this.setState({ name: '', number: '' });
    };
    render() {
        const { name, number } = this.state;
        const { handleSubmit, handleChange } = this;

         return(  <div className={css.container}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={this.nameId}>Name</label>
                        <input
                            type="text"
                            id={this.nameId}
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={handleChange}
                        />
                    <label htmlFor={this.numberId}>Number</label>
                        <input
                            type="tel"
                            id={this.numberId}
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={handleChange}
                        />
                    <button type="submit" className={css.btn}>Add contact</button>
             </form>
         </div>)
        
    }
}