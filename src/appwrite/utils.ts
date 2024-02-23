import {Client, Account, ID} from "appwrite"

export const client = new Client()
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
