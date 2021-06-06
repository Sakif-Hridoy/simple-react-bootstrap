import React, { useEffect } from 'react';

const TopHeadline = () => {
    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-05-06&sortBy=publishedAt&apiKey=d6ab4d7fc4ec4060be28cdc0568fa744')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    })
    return (
        <div>
            
        </div>
    );
};

export default TopHeadline;