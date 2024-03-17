import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Successfully connected to Database...');
    } catch (error) {
        console.error('Error in connecting to Database:', error);
    }
};

connectToDatabase();

export default mongoose.connection;