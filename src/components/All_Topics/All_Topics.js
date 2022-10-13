import React from 'react';
import { useLoaderData } from 'react-router-dom';
import All_Topic from '../All_Topic/All_Topic';

const All_Topics = () => {
   const allTopics=useLoaderData().data; 
    return (
        <div>
            <div className='cart-container container'>
                {
                    allTopics.map(allTopic => <All_Topic
                        key={allTopic.id}
                        allTopic={allTopic}
                    ></All_Topic>)
                }
            </div>
        </div>
    );
};

export default All_Topics;