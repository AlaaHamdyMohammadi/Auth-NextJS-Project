import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

// To creating new user
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // validation
    if (!email || !email.includes("@") || !password || password.length <= 5) {
      res.status(422).json({ message: "Invalid data" });
      return;
    }

    const client = await connectToDatabase();
    const db = client.db();

    const existingUser = await db.collection('users').findOne({email: email});
    if(existingUser){
        res.status(422).json({message: 'This email already exist'});
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(password);

    const newUser = {
      email,
      password: hashedPassword,
    };

    
    const result = await db.collection("users").insertOne(newUser);

    res.status(201).json({ message: "Successfully Created User" });
    client.close();
  }
}
export default handler;
