import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    profileFName: {
        type: String,
        required: true,
    },
    profileSName: {
        type: String,
        required: true,
    },
    profileEmail: {
        type: String,
        required: true,
    },
    profilePassword: {
        type: String,
        required: true,
    },
    profileDateOfBirth: {
        type: Array,
        required: true,
        default: [],
    },
    profileGenre: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required: false,
    },
    profileFrontPic: {
        type: String,
        required: false,
    },
    profileAlias: {
        type: String,
        required: true,
    },
    profileDetails: {
        type: Array,
        required: false,
        default: [],
    },
    profileUbication: {
        type: Array,
        required: false,
        default: [],
    },
    profileFriends: {
        type: Array,
        required: false,
        default: [],
    },
    profileAcceptFriendReq: {
        type: Boolean,
        required: false,
        default: false,
    },
});

export default mongoose.model("User", userSchema);
