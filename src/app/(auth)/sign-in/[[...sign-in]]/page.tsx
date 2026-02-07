import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

const SignInPage = () => {
    return (
        <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl font-bold">Welcome Back</h1>
                <p className="text-muted-foreground">Sign in to Vishva to unlock AI power</p>
            </div>
            <SignIn 
                appearance={{
                    variables: {
                        colorPrimary: "#ffffff",
                        colorBackground: "#000000"
                    }
                }}
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-foreground hover:underline font-medium">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default SignInPage;
