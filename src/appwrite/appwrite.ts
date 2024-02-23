import { account } from "./utils";
import { ID } from "appwrite";
import { UserContext } from "@/context/userContext";


export const signUpUser = async (email: any, password: any, name:any) => {
    const promise = await account.create(ID.unique()  ,email, password, name);
    console.log(promise)
    return promise;
}

export const loginUser = async (email: any, password: any) => {
    const promise = await account.createEmailPasswordSession(email, password);
    return promise;
}

