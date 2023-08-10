import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema(
	{
		name: String,
		content: String,
		communityNum: Number,
	},
	{ collection: 'Community' }
);

const Community = mongoose.models.Community || mongoose.model('Community', communitySchema);

export { Community };
