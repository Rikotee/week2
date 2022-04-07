import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: { type: String, minlength: [2, 'Sorry, your cat can\'t be called Z'] },
  birthdate: { type: Date, max: [Date.now, 'cat back from the future?'] },
  gender: { type: String, enum: { values: ['male', 'female', 'robot'], message: 'hermaphrodite cat?' }},
  color: String,
  filename: String,
  weight: { type: Number, min: [0, '0 gravity cat?'], max: [20, 'sumo cat?'] },
});

export default mongoose.model('Cat', catSchema);
