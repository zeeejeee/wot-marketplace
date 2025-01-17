import { Schema } from "mongoose";

export default new Schema({
    userName: {
        type: String,
        minlength: 5,
        maxlength: 39,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        minlength: 1,
        maxlength: 50,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    firstName: {
        type: String,
        minlength: 1,
        maxlength: 50,
        trim: true
    },
    lastName: {
        type: String,
        minlength: 1,
        maxlength: 50,
        trim: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    implementations: {
        type: Array
    }
})