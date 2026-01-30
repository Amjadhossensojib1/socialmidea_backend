import mongoose, {Schema, Types} from "mongoose";
import mongooseAggregatePaginate from "mongoose-mongoose-aggregate-paginate-v2-v2";

const videoSchema = new Schema(
    {

    videoFile: {
        type: String,
        required: true
        },
    thumbnail: {
        
        type: String,
        required: true
        },
    title: { 
        type: String,
        required: true
        },
    description: { 
        type: String,
        required: true
        },
    duration: { 
        type: Number,
        required: true
        },
    views: { 
        type: Number,
        required: true
        },
    ispublished: { 
        type: Boolean,
        default: true
        },
     owner: { 
        type: Schema.Types.ObjectId,
        ref: "user"
        }
    },
    {
        timestamps: true
    }
)
videoSchema.plugin(mongooseAggregatePaginate)
export const video = mongoose.model("Video",videoSchema)