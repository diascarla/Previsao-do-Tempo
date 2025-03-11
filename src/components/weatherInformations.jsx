import styled from 'styled-components'

export const WeatherInfromation = ({ weather }) => {
    console.log(weather)
    return (
        <DivContainer>
            <H2>{weather.name}</H2>
            <DivImg>
                <Img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={`Imagem da previsão do tempo de ${weather.name}`} />

                <Temperature>{Math.round(weather.main.temp)}°C</Temperature>
            </DivImg>

            <Description>{weather.weather[0].description}</Description>

            <DivDetails>
                <p>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</p>

                <p>Umidade: {weather.main.humidity}%</p>
            </DivDetails>

        </DivContainer>
    )
}

const DivContainer = styled.div`
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
`

const H2 = styled.h2`
    font-size: 2rem;
`

const DivImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width: 100px;
`

const Description = styled.p`
    text-transform: capitalize;
    font-size: 1.3rem;
    margin-bottom: 10px;
`

const Temperature = styled.p`
    font-weight: bold;
    font-size: 2.5rem;
`

const DivDetails = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`