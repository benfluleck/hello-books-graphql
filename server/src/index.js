import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import schema from './graphql/schema'

const app = express();

mongoose.connect(process.env.DB_CONFIG_URL);

mongoose.connection.once('open', () =>{
  console.log('Connection to db Initiated')
})

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
})
