const { Schema, model } = require("mongoose");

const exhibitionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    artworks: [{
        type: Schema.Types.ObjectId,
        ref: 'Artwork'
    }]
}, {
    timestamps: true
});

module.exports = model('Exhibition', exhibitionSchema);
