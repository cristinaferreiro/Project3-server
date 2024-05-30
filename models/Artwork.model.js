const { Schema, model } = require("mongoose");

const artworkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    technique: {
        type: String,
        required: true
    },
    dimension: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model("Artwork", artworkSchema);

