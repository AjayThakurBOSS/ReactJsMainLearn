// KEY PROPS
// 1. A 'key' is a special string attribute you need to include when creating list of elements.
// 2. Keys giv the elements a stable identity.
// 3. Keys help React identify which items have changed, or are added, or are removed.
// 4. Helps in effecient update of the user interface.

// List 1                            list 2
// <ul>                               <ul>
//                                        <li>Diana</li>
//  <li>Bruce</li>                      <li>Bruce</li>
//  <li>Clark</li>                       <li>Clark</li>
// </ul>                               </ul>

// Suppose we have to an item in list 1, as in list 2, what react does is, it compairs each 
// item in the list and checks if it is same or not. In the above case it finds that every item is
// different. but in actual it is not.
// This inefficiency can be problem. 
// For this problrm React provides KEY PROPS 
// React uses key to mach the items in tree


import React from 'react';
import Person  from './Person';

function NameList() {
    // const names = ['Ram', 'Shyam', 'Radhe ']
    // Way - 3
    // const nameList = names.map(name => <h3>{name}</h3>)
    const person = [
        {
            id: 1,
            name:'Ajay',
            age: 25,
            skill: 'react'
        },
         {
            id: 2,
            name:'Ram',
            age: 26,
            skill: 'react'
        },
         {
            id: 3,
            name:'Shyam',
            age: 27,
            skill: 'react'
        },
         {
            id: 4,
            name:'Radhe',
            age: 28,
            skill: 'react'
        },
         {
            id: 5,
            name:'Jay',
            age: 29,
            skill: 'react'
        }
    ];

    const personList = person.map(person => 
        <Person key={person.id} person = {person} ></Person>
        )
  return (

    <div>
    {personList}
    {/* For Way 3 
    {nameList}
    */}
    {/* 
    Way 1 to render list in UI 
      <h3> {names[0]} </h3>
      <h3> {names[1]} </h3>
      <h3> {names[2]} </h3>
    */}

    {/* Way 2 to render list in UI : MAP() method 
    {
        names.map(name => <h3>{name}</h3>)
    }
*/}
    </div>
  );
}

export default NameList;
