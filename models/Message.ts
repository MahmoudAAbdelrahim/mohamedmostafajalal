import mongoose, { Schema, Document, model } from 'mongoose';

export interface Icontact extends Document {
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: Date;
}

const contactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Prevent recompiling model during hot reload
export default mongoose.models.contact || model<Icontact>('contact', contactSchema);
