import { model, Schema } from "mongoose";
import { IService } from "./service.interface";

const serviceSchema = new Schema<IService>({
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  });
  
  const Service = model<IService>('Service', serviceSchema);
  
  export default Service;