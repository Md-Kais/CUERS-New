import { DropdownOptionsContext } from '@/Components/DropdownOptionsContext';
import Tablenew from '@/Components/UI/Tablenew';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/shadcmps/ui/table';
import React, { useContext, useEffect } from 'react';

const tableCols = [
    {
        col: 'bill_id',
        type: 'text',
        filter: 'text',
    },
    {
        col: 'semester_no',
        type: 'number',
        filter: 'number',
    },
    {
        col: 'status',
        type: 'dropdown',
        filter: 'text',
    },
    {
        col: 'year',
        type: 'number',
        filter: 'text',
    },
    {
        col: 'evaluator_id',
        type: 'number',
        filter: 'number',
    },
];
const CheckBillForms = () => {
    const {
        dropdownOptions,
        updateDropdownOptions,
        createdNew,
        setCreatedNew,
    } = useContext(DropdownOptionsContext);
    useEffect(() => {
        const postData = async () => {
            try {
                const params = {
                    dynamicOps: false,
                };
                let response = await fetch(
                    'http://localhost:3000/users/processDropDownData',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ data: { params } }),
                    }
                );

                if (response.ok) {
                    let data = await response.json();
                    let parsedData = JSON.parse(data);
                    updateDropdownOptions(parsedData);
                    // sessionStorage.setItem(storageLabel, data);
                } else {
                    throw new Error('Error posting data');
                }
            } catch (error) {
                console.error('Error posting data:', error);
            }
        };
    }, []);
    return (
        <div>
            <Tablenew
                tableCols={tableCols}
                tableName="Bill"
                loadCondition={[]}
            ></Tablenew>
        </div>
    );
};

export default CheckBillForms;
