import { AgencyDetails } from "@/components";
import { getAuthUserDetails, verifyInvitation } from "@/lib/quries";
import { currentUser } from "@clerk/nextjs/server";
import { Plan } from "@prisma/client";
import { redirect } from "next/navigation";
import React from 'react'

interface Props {
    searchParams: {
        plan: Plan;
        state: string;
        code: string;
    }
}

const AgencyPage = async ({ searchParams }: Props) => {

    const authUser = await currentUser();

    if (!authUser) {
        redirect("/sign-in");
    }

    const agencyId = await verifyInvitation();

    const user = await getAuthUserDetails();

    if (agencyId) {
        if (user?.role === "SUBACCOUNT_USER" || user?.role === "SUBACCOUNT_GUEST") {
            return redirect("/subaccount");
        } else if (user?.role === "AGENCY_OWNER" || user?.role === "AGENCY_ADMIN") {
            if (searchParams.plan) {
                return redirect(`/agency/${agencyId}/billing?plan=${searchParams.plan}`);
            }
            if (searchParams.state) {
                const statePath = searchParams.state.split("___")[0];
                const stateAgencyId = searchParams.state.split("___")[1];
                if (!stateAgencyId) {
                    return (
                        <div className="">
                            Not Authorized
                        </div>
                    )
                }

                return redirect(`/agency/${stateAgencyId}/${statePath}?code=${searchParams.code}`);
            } else {
                return redirect(`/agency/${agencyId}`);
            }
        } else {
            return <div className="">Not Authorized</div>
        }
    }

    return (
        <div className="flex items-center justify-center mt-4">
            <div className="max-w-3xl mx-auto border border-none p-4 space-y-6 rounded-xl w-full">
                <h1 className="text-4xl font-semibold">
                    Create your agency
                </h1>
                <AgencyDetails data={{ companyEmail: authUser?.emailAddresses[0].emailAddress }} />
            </div>
        </div>
    )
};

export default AgencyPage
