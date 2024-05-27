import { createUploadthing, type FileRouter } from "uploadthing/next"
import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

const authenticateUser = () => {
    const user = auth()
    if (!user) throw new Error("Unauthorized")
    return user;
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    subaccountLogo: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(authenticateUser)
        .onUploadComplete(() => { }),
    avatar: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(authenticateUser)
        .onUploadComplete(() => { }),
    agencyLogo: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(authenticateUser)
        .onUploadComplete(() => { }),
    media: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(authenticateUser)
        .onUploadComplete(() => { }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
