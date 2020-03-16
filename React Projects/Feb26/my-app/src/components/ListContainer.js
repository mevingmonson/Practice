/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */

import React from 'react';
import ListItem from './ListItem';

export default function ListContainer(props) {
    return (
        <ul className="list-group mt-5">
            {
                props.list.map((item) => (
                    <ListItem key={item.id} name={item.Name} age={item.Age} />
                ))
            }
        </ul>
    );
}

// const ListContainer = props => (
//     <ul className="list-group mt-5">
//         {props.list.map(item => (
//             <ListItem key={item.id} name={item.name} age={item.age} />
//         ))}
//     </ul>
// )

// export default ListContainer;
