const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    type: { type: String, enum: ['suggestion', 'bug'], required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    title: { type: String, required: true, maxlength: 100 },
    urlID: { type: String, unique: true },
    content: { type: String, required: true },
    images: [String],
    userID: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected', 'implemented', 'investigating', 'resolved'], default: 'pending' },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    usersVoted: [{ 
        userID: { type: String, required: true },
        voteType: { type: String, enum: ['up', 'down'], required: true }
    }],
    comments: [{
        userID: { type: String, required: true },
        content: { type: String, required: true },
        lastCommentTime: { type: Date, default: Date.now },
        createdAt: { type: Date, default: Date.now }
    }],
    createdAt: { type: Date, default: Date.now }
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;