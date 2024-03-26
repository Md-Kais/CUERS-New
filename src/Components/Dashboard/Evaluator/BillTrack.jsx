import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shadcmps/ui/table";
import { Badge } from "@/shadcmps/ui/badge";
import BillFormDropdown from "@/Components/UI/BillFormDropdown";
import ProcedureProgress from "@/wels-components/ProcedureProgress/ProcedureProgress";
import ProgressStep from "@/wels-components/ProcedureProgress/ProgressStep";
import EditingPdf from "./EditingPdf";
import {
    Banknote,
    BookText,
    Building,
    Camera,
    Check,
    DollarSign,
    FileLineChart,
    LoaderIcon,
    Package,
    PackageCheck,
    TowerControl,
    Truck,
} from "lucide-react";

const updateSemester = () => {};
const updateYear = () => {};
const BillTrack = () => {
    return (
        <div>
            <BillFormDropdown
                viewPdf={false}
                updateSemester={updateSemester}
                updateYear={updateYear}
                // billData={billData}
            ></BillFormDropdown>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Bill ID</TableHead>
                        <TableHead>Personnel</TableHead>
                        <TableHead>Personnel Role</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="text-left">
                        <TableCell>34kj4lkj4l</TableCell>
                        <TableCell>Dr. Kazi Ashrafuzzaman</TableCell>
                        <TableCell>Chairman of Exam Committee</TableCell>
                        <TableCell>Looks good!</TableCell>
                        <TableCell>
                            <Badge
                                className="bg-green-300"
                                variant="destructive"
                            >
                                Approved
                            </Badge>
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-left">
                        <TableCell>34kj4lkj4l</TableCell>
                        <TableCell>Dr. Rashed Mustafa</TableCell>
                        <TableCell>Exam controller</TableCell>
                        <TableCell>Correct!</TableCell>
                        <TableCell>
                            <Badge
                                className="bg-green-300"
                                variant="destructive"
                            >
                                Approved
                            </Badge>
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-left">
                        <TableCell>34kj4lkj4l</TableCell>
                        <TableCell>Dr. Rudra Pratap Devnath</TableCell>
                        <TableCell>Account Chief</TableCell>
                        <TableCell>
                            No of student in evaluation doesn't match with the
                            provided information.
                        </TableCell>
                        <TableCell>
                            <Badge className="bg-red-300" variant="destructive">
                                Not approved
                            </Badge>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div className="pt-20">
                <ProcedureProgress showSerial={true} direction="horizontal">
                    <ProgressStep status="approved" icon={<Check />}>
                        Order Received
                    </ProgressStep>
                    <ProgressStep status="approved" icon={<LoaderIcon />}>
                        Order Processing
                    </ProgressStep>
                    <ProgressStep status="cancelled" icon={<DollarSign />}>
                        Payment Failed
                    </ProgressStep>
                    <ProgressStep status="waiting" icon={<Package />}>
                        Packaging
                    </ProgressStep>
                    <ProgressStep status="waiting" icon={<Truck />}>
                        Shipment
                    </ProgressStep>
                    <ProgressStep status="waiting" icon={<PackageCheck />}>
                        Delivered
                    </ProgressStep>
                </ProcedureProgress>
            </div>
            {/* <EditingPdf /> */}
        </div>
    );
};

export default BillTrack;
