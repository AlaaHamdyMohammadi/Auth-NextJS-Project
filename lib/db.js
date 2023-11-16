import {MongoClient} from 'mongodb';

export async function connectToDatabase(){
    const client = await MongoClient.connect(
      `mongodb+srv://alaahamdy2197:HPqPbHPKEQBgyAGG@cluster0.mh5iqqv.mongodb.net/authSite?retryWrites=true&w=majority`
    );

    return client;
}