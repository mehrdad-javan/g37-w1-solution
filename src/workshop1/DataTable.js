import React, { useState } from 'react';

const DataTable = () => {

    const initialData = [
        {id: 1, firstName: "Mehrdad", lastName: "Javan", age: 32, birthDate: "1989-02-27", country: "Sweden", city: "Växjö" },
        {id: 2, firstName: "Test", lastName: "Test", age: 30, birthDate: "1989-02-28", country: "Sweden", city: "Växjö" }
    ];
    
    const [studentList, setStudentList] = useState(initialData);

const TableHeader = () => {
    return (
    <thead>
        <td>Id</td>
        <td>FirstName</td>
        <td>LastName</td>
        <td>Age</td>
        <td>Action</td>
    </thead>
    );
};

const TableRow = (props) => {
    return(
    <tbody>
        {
            props.list.map((student) => (
            <tr>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
            </tr>
                ) )
        }
    </tbody>
    );
};

    return (
        <div className="container">
            <table className="table .table-striped">
                <TableHeader />
                <TableRow list={studentList} />
            </table>
        </div>
    );
};

export default DataTable;