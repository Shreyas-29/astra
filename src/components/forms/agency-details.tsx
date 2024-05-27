"use client";

import React, { useEffect, useState } from 'react'
import { Agency } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../ui/card";
import { AlertDialog } from "../ui/alert-dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { AgencySchema, AgencySchemaType } from "@/lib/validators/agency";
import FileUpload from "../global/file-upload";

interface Props {
    data?: Partial<Agency>
}

const AgencyDetails = ({ data }: Props) => {

    const router = useRouter();

    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const form = useForm<AgencySchemaType>({
        mode: "onBlur",
        resolver: zodResolver(AgencySchema),
        defaultValues: {
            name: data?.name,
            companyEmail: data?.companyEmail,
            companyPhone: data?.companyPhone,
            whiteLabel: data?.whiteLabel || false,
            address: data?.address,
            city: data?.city,
            zipCode: data?.zipCode,
            state: data?.state,
            country: data?.country,
            agencyLogo: data?.agencyLogo,
        },
    });

    useEffect(() => {
        if (data) {
            form.reset(data);
        }
    }, [data]);

    const handleSubmit = async (values: AgencySchemaType) => {
        console.log(values);
    };

    return (
        <AlertDialog>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>
                        Agency Details
                    </CardTitle>
                    <CardDescription>
                        Fill in the required information to create your agency
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-full">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="space-y-4 w-full"
                        >
                            <FormField
                                disabled={form.formState.isSubmitting}
                                control={form.control}
                                name="agencyLogo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Agency Logo
                                        </FormLabel>
                                        <FormControl>
                                            <FileUpload
                                                value={field.value}
                                                apiEndpoint="agencyLogo"
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </AlertDialog>
    )
};

export default AgencyDetails
