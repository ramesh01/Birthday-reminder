import React from 'react';
import img from '../p.png';
const List = ({people}) => {
    return(
        <>
        {people.map((person)=>{
            const {id, name, age} = person; 
            return (<article key={id} className="person">
                <img src={img} alt={name} width="100%" height="" className="img-style"/>
                <div className="person-info">
                    <h4 className="person--name">{name}</h4>
                    <p className="person--age">{age} Years</p>
                </div>
            </article>);
        })}
        </>
    )
};

export default List;