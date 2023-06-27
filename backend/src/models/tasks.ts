import { InferSchemaType, Schema, model } from "mongoose";

const taskSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    task: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false,
    },
    uploadDate: {
        type: Date,
        default: Date.now
    }
})

type Tasks = InferSchemaType<typeof taskSchema>

export default model<Tasks>('Tasks', taskSchema)