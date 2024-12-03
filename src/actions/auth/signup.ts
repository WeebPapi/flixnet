import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase"
export const signUp = async (formData: FormData) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.get('email') as string, formData.get('password') as string);
        console.log(userCredential);
        return userCredential.user;
    } catch (error) {
        console.log(error);
        return null
    }
}