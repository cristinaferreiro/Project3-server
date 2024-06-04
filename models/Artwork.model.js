const { Schema, model } = require("mongoose");

const artworkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    auction: {
        // startDate: Date,
        // endDate: Date,
        active: {
            type: Boolean,
            default: true
        },
        bids: [
            {
                user: {
                    type: Schema.Types.ObjectId,
                    ref: 'User'
                },
                amount: {
                    type: Number
                },
                date: {
                    type: Date,
                    default: Date.now()
                }
            }
        ]
    }
}, {
    timestamps: true
});

module.exports = model("Artwork", artworkSchema);

