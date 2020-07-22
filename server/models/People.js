import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const People = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        planet: { type: ObjectId, ref: "Planet", required: true },

    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default People;