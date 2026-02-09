import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

const SignUpPage = () => {
    return (
        <div className="w-full max-w-md space-y-6">
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl font-bold">Get Started</h1>
                <p className="text-muted-foreground">Join Vishva and experience everything AI can do</p>
            </div>
            <SignUp 
                appearance={{
                    variables: {
                        colorPrimary: "#ffffff",
                        colorBackground: "#000000"
                    }
                }}
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
                {"Already have an account? "}
                <Link href="/sign-in" className="text-foreground hover:underline font-medium">
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default SignUpPage;
