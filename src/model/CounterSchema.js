import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema(
	{
		name: String,
		communityNum: Number,
	},
	{ collection: 'Counter' }
);

const Counter = mongoose.models.Counter || mongoose.model('Counter', counterSchema);

export { Counter };
