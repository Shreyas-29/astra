import { FileIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { Button } from "../ui/button";
import { UploadDropzone } from '@/lib/uploadthing'

interface Props {
    value?: string;
    apiEndpoint: "agencyLogo" | "avatar" | "subaccountLogo";
    onChange: (url?: string) => void;
}

const FileUpload = ({ value, apiEndpoint, onChange }: Props) => {

    const type = value?.split(".").pop();

    if (value) {
        return (
            <div className="flex flex-col items-center justify-center">
                {type !== "pdf" ? (
                    <div className="relative w-40 h-40">
                        <Image
                            fill
                            src={value}
                            alt="Uploaded Image"
                            className="object-contain rounded-full"
                        />
                    </div>
                ) : (
                    <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
                        <FileIcon className="w-8 h-8 mr-2" />
                        <Link
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
                        >
                            View File
                        </Link>
                    </div>
                )}

                <Button
                    type="button"
                    variant="ghost"
                    onClick={() => onChange("")}
                >
                    <XIcon className="w-4 h-4 mr-2" />
                    {/* Remove */}
                </Button>
            </div>
        )
    }

    return (
        <div className="w-full bg-muted/30">
            <UploadDropzone
                endpoint={apiEndpoint}
                onClientUploadComplete={(res) => {
                    onChange(res?.[0].url)
                }}
                onUploadError={(error: Error) => {
                    console.log(error)
                }}
            />
        </div>
    )
};

export default FileUpload
