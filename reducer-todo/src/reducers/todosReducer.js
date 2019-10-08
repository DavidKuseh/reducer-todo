import React from 'react';

export const todosList = [
    {item: 'Learn about reducers', completed: false, id: 1},
    {item: 'Read on ContextAPI', completed: false, id: 2},
    {item: 'Revise destructuring', completed: false, id: 3},
]


export default function reducer(todos, action) {
    switch (action.type) {
        default:
            return todos;
    }
}