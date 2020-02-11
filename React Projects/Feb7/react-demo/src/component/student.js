import React from "react";

let students = [
    {
        name: "Mevin",
        phonenumber: "8281910028",
        email: "mevin@gmail.com"
    },
    {
        name: "Robin",
        phonenumber: "839289183",
        email: "robin@gmail.com"
    }
];

function getStudent(s) {
    return s.map((ele) => {
        return (
            <tr>
                <td>{ele.name}</td>
                <td>{ele.phonenumber}</td>
                <td>{ele.email}</td>
            </tr>
        )
    });
}

export default function Student() {
    return (
        <div>
            <table className="text-primary  table table-striped">
                <thead>
                    <tr>
                        <th className="text-success">Name</th>
                        <th className="text-success">Phone number</th>
                        <th className="text-success">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {getStudent(students)}
                </tbody>
            </table>
        </div>
    )
}
