'use server';

export async function signUp(params: SignInParams) {
    const { uid, name, email } = params;

    try {
        
    } catch (error: any) {
        console.error('Error creating a user', error)

        if(error.code === 'auth/email-already-exists') {
            return {
                success: false,
                message: 'This email is already in use.'
            }
        }
    }
}