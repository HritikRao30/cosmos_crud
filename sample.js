import * as dotenv from 'dotenv';
dotenv.config();

import { CosmosClient } from "@azure/cosmos";

const key = process.env.COSMOS_KEY;
const endpoint = process.env.COSMOS_ENDPOINT;

const timeStamp = + new Date();
const databaseName = `latest_${timeStamp}`;
const containerName = `products_${timeStamp}`;
const partitionKeyPath = ["/category"]

const cosmosClient = new CosmosClient({ endpoint, key });

export default async () => {
    const { database } = await cosmosClient.databases.createIfNotExists({ id: databaseName });
    const { container } = await database.containers.createIfNotExists({
        id: containerName,
        partitionKey: {
            paths: partitionKeyPath
        }
    });
    return container;
};

