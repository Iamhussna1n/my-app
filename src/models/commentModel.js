import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "please enter a username"],
    },
    email : {
        type: String,
        required: [true, "please enter an email"],
    },
    comment : {
        type: String,
        required: [true, "please enter a comment"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);