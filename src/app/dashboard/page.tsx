import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"


export default function Home() {
    return (
        <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold">
                Dashboard</h1>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className= "text-center">Status</TableHead>
                        <TableHead>Value</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium text-left text-bold">
                            <span>25/03/2025</span>
                        </TableCell>
                        <TableCell className="text-left">
                            <span className= "font-semibold">John Smith</span>
                        </TableCell>
                        <TableCell className="text-left">
                            <span className= "">jsmith@protonmail.com</span>
                        </TableCell>
                        <TableCell className="text-cente">
                            <Badge>
                                <span>Open</span>
                            </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                            <span className= "font-semibold">$250.00</span>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </main>
    );

}
