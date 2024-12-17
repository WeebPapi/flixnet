import { auth } from "@/firebase"
import { updateEmail, updatePassword, updateProfile } from "firebase/auth";

export const customUpdateProfile = (data: {displayName?: string, email?: string, password?: string, photoURL?: string}) => {
    if (!auth.currentUser) {
        return new Promise((_, reject) => {
            reject("No user logged in");
        });

    }
    if (data.password)
        updatePassword(auth.currentUser, data.password).then(() => console.log("Password updated")).catch((error) => console.log(error));
    if (data.email)
        updateEmail(auth.currentUser, data.email).then(() => console.log("Email updated")).catch((error) => console.log(error));
    updateProfile(auth.currentUser, data).then(() => console.log("Profile updated")).catch((error) => console.log(error));

}