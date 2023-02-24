import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Buttoncmp from "../../UI/Buttoncmp";
import Inputcmp from "../../UI/Inputcmp";
import Table from "../../UI/Table";
import { useState } from "react";
import Dropdown from "../../UI/Dropdown";
import Tablenew from "../../UI/Tablenew";
const tableCols = [
  // { col: "No", type: "row", required: true, },
  {
    col: "evaluator_id",
    type: "number",
    required: true,
    // type: "dropdown",
    // values: [
    //   "Dr. Rudra Pratap Devnath",
    //   "Dr. Anwarul Azim",
    //   "Dr. Abu Nowshad Chowdhury",
    //   ,
    //   "Mr. Nihad Karim Chowdhury",
    //   "Dr. Mohammad Osiur Rahman",
    //   "Dr. Rashed Mustafa",
    //   "Dr. Mohammad Khairul Islam",
    //   "Dr. Kazi Ashrafuzzaman",
    //   "Mr. Mohammad Rokan UddinFaruque",
    //   "Mrs. Nasrin Sultana",
    //   "Dr. Asaduzzaman",
    //   "Mr. H.S. Faruq Alam",
    //   "Dr. Mohammed Hanif Siddique",
    //   "Dr. Mohammed Abdur Rauf",
    // ],
  },
  {
    col: "role",
    type: "dropdown",
    values: ["Member", "Chairman", "External member"],
    required: true,
  },
  {
    col: "program",
    type: "dropdown",
    values: ["BSc", "MSc", "M.Phil", "PhD"],
    required: true,
  },
  {
    col: "semester_number",
    type: "dropdown",
    values: [1, 2, 3, 4, 5, 6, 7, 8],
    required: true,
  },
  {
    col: "year",
    type: "number",
    required: true,
  },
  {
    col: "Delete",
    type: "button",
    label: "Delete",
    variant: "dasi",
  },
];

// const peoples = ["1","2", "3", "4", "5"];
const FormExamCommittee = () => {
  const programOptions = ["BSc", "MSc"];
  return (
    <div className="">
      <div className="mb-8  mt-8">
        <span className="text-xl sm:text-2xl block">Committee information</span>
      </div>
      <div>
        <Tablenew tableCols={tableCols} tableName={"Exam_Committee"}></Tablenew>
      </div>
    </div>
  );
};

export default FormExamCommittee;
