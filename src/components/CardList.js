import React from "react";
import { Card } from "./Card";
// import {robots} from "./Robots";     //doesn't need the import as CardList can receive them in Robots.js

// if below not be whiten as a class, can be a function syntax
const CardList = ({robots}) => {        //since in index.js, CardList receives robots from Robots.js, so here, we can destructure it and say we have access to it
    // if (true) {
    //     throw new Error('Noooooo!!')
    // }
    return (
        <div>
            {
                robots.map((user, i) => {
                    // console.log(user)
                    // return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>

                    // below user is an array
                    // here, the key prop should have something that doesnt change. For example, index or i could change if array items get moved.
                    // So a better key in this case would be something unique like id.
                    return <Card key={user.id} user={user} />
                })
            }
        </div>
    )
};

export default CardList
