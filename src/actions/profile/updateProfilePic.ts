import { auth } from "@/firebase";
import { updateProfile } from "firebase/auth";

export const updateProfilePic = async ( image: string) => {
    try {
        if (!auth.currentUser) {
            return new Promise((_, reject) => {
                reject("No user logged in");
            });
        }
        const response = await updateProfile(auth.currentUser, {
            photoURL: image,
        });
        return response;
    } catch (error) {
        console.log(error);
        return new Promise((_, reject) => {
            reject(error);
        });
    }
}