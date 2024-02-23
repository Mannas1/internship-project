import { account, databases } from "./utils";
import { ID } from "appwrite";
import { UserContext } from "@/context/userContext";

export const docId = import.meta.env.VITE_DATABASE_ID;
export const collectionId = import.meta.env.VITE_USER_COLLECTION_ID;


export const signUpUser = async (email: any, password: any, name:any) => {
    const promise = await account.create(ID.unique()  ,email, password, name);
    console.log(promise)
    return promise;
}

export const loginUser = async (email: any, password: any) => {
    const promise = await account.createEmailPasswordSession(email, password);
    return promise;
}


export const createUserData = async (title: any, description: any) => {
    const promise = await databases.createDocument(docId, collectionId, ID.unique(), {title, description});
    return promise;
}

export const listAllDocuments = async () => {
    const promise = await databases.listDocuments(docId, collectionId);
    // console.log(promise)
    return promise;
}

