// @ts-nocheck
import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/shadcmps/ui/table';
import { Badge } from '@/shadcmps/ui/badge';
import BillFormDropdown from '@/Components/UI/BillFormDropdown';
import EditingPdf from './EditingPdf';
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
    RefreshCw,
    PersonStanding,
} from 'lucide-react';

import ProcedureProgress from '@/wels-components/ProcedureProgress/ProcedureProgress';
import { ProgressStep } from '@/wels-components/ProcedureProgress/ProgressStep';
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
            <div className="pt-20">
                <ProcedureProgress direction="horizontal">
                    <ProgressStep status="approved" icon={<Check />}>
                        Chairman of Exam Committee
                    </ProgressStep>
                    <ProgressStep status="approved" icon={<Check />}>
                        Exam Controller
                    </ProgressStep>
                    <ProgressStep status="processing" icon={<LoaderIcon />}>
                        Exam Bill Section
                    </ProgressStep>
                    <ProgressStep status="waiting" icon={<RefreshCw />}>
                        Account Chief
                    </ProgressStep>
                    <ProgressStep status="waiting" icon={<RefreshCw />}>
                        Account Bill Section
                    </ProgressStep>
                    <ProgressStep status="waiting" icon={<RefreshCw />}>
                        Account Cheque Section
                    </ProgressStep>
                </ProcedureProgress>
            </div>
        </div>
    );
};

export default BillTrack;
