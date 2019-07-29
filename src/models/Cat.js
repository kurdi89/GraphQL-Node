import mongoose from 'mongoose';


// Create the Model :
export const Cat = mongoose.model('Cat', { name: String });