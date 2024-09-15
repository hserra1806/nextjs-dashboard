import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'Customers',
};

export default function CustomersPage(
    { searchParams
    }: {
        searchParams?: {
            query?: string
        }
    }) {
    const query = searchParams?.query || '';

    return (
        <Suspense fallback={<p>Cargando...</p>}>
            <CustomersTable query={query} />
        </Suspense>
    )
}