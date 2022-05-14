import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NoResponcesYet from './NoResponcesYet';
import ResponceCard from './ResponceCard';

export default function ResponcesHolder({ repliesArray }) {
	const [cleanedUpRepliesArray, setCleanedUpRepliesArray] = useState([]);

	function cleanUpRepliesArray(repliesArray) {
    //returnd and don't mutate the array if timestamp is empty
    if(repliesArray.length === 0) {
      setCleanedUpRepliesArray([]);
    }
    else if (repliesArray[repliesArray.length - 1].timestamp === "") {
      setCleanedUpRepliesArray([]);
    }
    //check if timestamp is unique
    for(let reply of repliesArray) {
      if(repliesArray[repliesArray.length - 1].timestamp === reply.timestamp) {
        setCleanedUpRepliesArray([...cleanedUpRepliesArray]);
      }
    }
    //idea is that add the last element of the array if timestamp is ok
    setCleanedUpRepliesArray([...cleanedUpRepliesArray, repliesArray[repliesArray.length - 1]]);
	}

	useEffect(() => {
			cleanUpRepliesArray(repliesArray);
			console.log(cleanedUpRepliesArray);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ repliesArray ]
	);

	return (
		<Wrapper>
			<h3>Responces</h3>
			<Content>
				{cleanedUpRepliesArray.map(el => {
          return <ResponceCard key={el.timestamp} prompt={el.prompt} reply={el.reply} timestamp={el.timestamp}/>;
        })}
				{cleanUpRepliesArray.length === 0 && <NoResponcesYet/>}
			</Content>
		</Wrapper>
	);
}

//Styles

const Wrapper = styled.div`
	margin: 3%;
	height: 100%;
`;

const Content = styled.div`
	padding-top: 45px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
`;
