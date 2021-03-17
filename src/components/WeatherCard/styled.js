import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
    width: 90vw; 
    height: 85%;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    justify-content: space-around;
    align-items: center;
    position: relative;
`;

export const ActualWeather = styled.div`
	display: flex;
    width: 95%;
    height: 60%;
    background-color: rgba(0, 0, 0, .15);
    border-radius: 2rem;
    align-items: center;
    justify-content: space-around;

    padding: 1rem;
`;

export const Rectangle = styled.div`
	display: flex;
    width: 95%;
    height: 30%;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 1rem;

    padding: 1rem;

    color: white;
`;

export const ForecastCard = styled.div`
    display: flex;
    flex-basis: 20%;
    height: 100%;
`;

export const Temperature = styled.h1`
    display: flex;
    color: white;
    justify-self: center;
    font-size: 10rem;
    align-self: center;
`;

export const Degrees = styled.span`
    display: flex;
    color: white;
    font-size: 3rem;
    align-self: top;
    margin-top: 2rem;
`;

export const ContainerWeather = styled.div`
    display: flex;
    height: min-content;
    flex-basis: 40%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const ContainerData = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerIcon = styled.div`
    display: flex;
    height: 10rem;
    width: 10rem;
    align-items: center;
    justify-content: center;
`;

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    height: 40%;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
`;

export const Description = styled.span`
    display: flex;
    color: white;
    justify-self: flex-end;
    text-transform: capitalize;
`;

export const Humidity = styled.span`
    display: flex;
    color: white;
    justify-self: flex-end;
`;

export const WindSpeed = styled.span`
    display: flex;
    color: white;
    justify-self: flex-end;
`;