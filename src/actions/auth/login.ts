import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const logIn = async (formData: FormData) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, formData.get('email') as string, formData.get('password') as string);
        return userCredential.user;
    } catch (error) {
        console.log(error);
        return null;
    }
}