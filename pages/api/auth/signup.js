import { connectToDatabase } from "../../../lib/db";

// To creating new user
async function handler(req, res){
    const {email, password} = req.body;

    // validation
    if(!email || !email.includes('@') || !password || password.length <= 5){
        res.status(422).json({message: 'Invalid data'});
        return;
    }

    const newUser = {
        email, password
    }

    const client = await connectToDatabase();
    const db = client.db();
    db.collection('users').insertOne(newUser);
}
export default handler;