
export const ContactListItem = ({name, number}) => {
    return (
        <li>{name}: {number}
            <button type="button">Delete</button>
        </li>
    )
};