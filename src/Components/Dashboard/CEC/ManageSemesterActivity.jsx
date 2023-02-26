import React from "react";
import Dropdown from "../../UI/Dropdown";
import Tablenew from "../../UI/Tablenew";

const tablecols = [
  {
    col: "activity_type_id",
    type: "dropdown",
    values: [3, 6, 9, 10, 11, 12, 13, 14, 15],
    required: true,
  },
  {
    col: "sector_or_program",
    type: "dropdown",
    values: ["BSc", "MSc", "Tutorial", "Lab", "By computer", "By hand"],
    required: true,
  },
  {
    col: "evaluator_id",
    type: "number",
    regex: "^\\d{4}$",
    regexMessage: "e.g. 1013",
    required: true,
  },
  {
    col: "semester_no",
    type: "dropdown",
    values: [1, 2, 3, 4, 5, 6, 7, 8],
    required: true,
  },
  {
    col: "factor",
    type: "dropdown",
    values: ["No of members", "No of students"],
    required: true,
  },
  {
    col: "quantity",
    type: "number",
    regex: "^\\d+(\\.\\d+)?$",
    regexMessage: "e.g. 12",
    required: true,
  },
  {
    col: "Delete",
    type: "button",
    label: "Delete",
    variant: "dasi",
  },
];

const ManageSemesterActivity = () => {
  return (
    <div>
      <div className="mb-8 mt-8">
        <span className="text-xl sm:text-2xl block text-center">
          Manage Semester Activity
        </span>
      </div>
      <Tablenew
        tableCols={tablecols}
        tableName="Processes_Semester_Activity"
      ></Tablenew>
    </div>
  );
};

export default ManageSemesterActivity;
