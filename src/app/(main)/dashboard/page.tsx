import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AgencyPage = async () => {

    const authUser = await currentUser();

    if (!authUser) {
        redirect("/sign-in");
    }

    return (
        <div className="flex items-center justify-center mt-4">
            <h1 className="text-xl font-semibold text-center mx-auto pt-28">
                Dashboard page
            </h1>
        </div>
    )
};

export default AgencyPage
