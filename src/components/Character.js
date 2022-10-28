// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledDiv1 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-right: 80px;
flex-wrap: wrap;
margin: 30px;
`;

const StyledDiv2 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
margin-right: 80px;
flex-wrap: wrap;
`;

const StyledH3 = styled.h3`
color: 	#87CEEB;
`;

const StyledP = styled.p`
color: #87CEEB;
`;

const StyledImg = styled.img`
height: 200px;
width: 200px;
`;



const Character = (props) => {
    console.log(props.character);
    const { name, gender, height } = props.character;
    return (
        <div>
            <StyledDiv1>
                <StyledH3>{name}</StyledH3>
                <StyledP>Gender: {gender}</StyledP>
                <StyledP>Height: {height}</StyledP>
                <StyledImg src='https://cdn.vox-cdn.com/thumbor/gwoIXENtTU3yoKdaaymm_rTFfrY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22182522/luke_jabbas_palace.jpg' />
            </StyledDiv1>
        </div>
    )
}


export default Character;