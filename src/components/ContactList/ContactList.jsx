import { ContactListItem } from "components/ContactListItem/ContactListItem"
export const ContactList = ({contacts}) => {
    return (
        
        <ul>
            {contacts.map(( {id, name, number} ) => (
                <ContactListItem
                    key={id} name={name} number={number} />
            ))}
        </ul>

    )
};