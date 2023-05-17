import React from "react";
// import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { useSelector } from "react-redux";
import {getContacts} from 'redux/selectors';


const Contacts = ({onDelete}) => {
    
const contacts = useSelector(getContacts);
// const filter = useSelector(getFilter);
// const normalizeFilter = filter.toLowerCase();
//     const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter),);
    return (
        <ul className={css.list}>
        {contacts.map(({id, name, number}) => (
          <li
          className={css.contactItem}
          key={id}>
            <p className={css.nameContact}>{name}: {number}</p>
            <button  className={css.buttonDelete} type="button" onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
        
       </ul>
        )
}


export default Contacts;

// Contacts.propTypes = {
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       }).isRequired
//     ).isRequired,
//     filter: PropTypes.string.isRequired,
//   };