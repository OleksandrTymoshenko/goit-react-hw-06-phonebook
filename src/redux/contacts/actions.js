import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContacts = createAction('contacts/add', arr  => {
    return {
        payload: {
            id: nanoid(),
            name: arr.name,
            number: arr.number
        },
    };
});

const filterName = createAction('contacts/filterName');

const deleteContacts = createAction('contacts/delete');

export default {addContacts, deleteContacts, filterName};