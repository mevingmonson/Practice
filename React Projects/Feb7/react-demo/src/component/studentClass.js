import React from 'react';

export default class StudentClass extends React.Component {
    constructor(props) {
        super(props);
        this.studArray = [
            {
                name: 'Mevin',
                age: 24,
                place: 'Kochi',
                marks: [20, 98, 79],
                address: {
                    house: 'RedMount',
                    street: '4th Avenue'
                }
            },
            {
                name: 'John',
                age: 29,
                place: 'Banglore',
                marks: [49, 32, 54],
                address: {
                    house: 'GreenValley',
                    street: 'Sterling Road'
                }

            }
        ];
    }

    getStudentDetails(array) {
        return array.map((ele, index) => {
            return (
                <tr key={index}>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.place}</td>
                    <td>{ele.marks}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Place</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getStudentDetails(this.studArray)}
                    </tbody>
                </table>
            </div>
        )
    }

}