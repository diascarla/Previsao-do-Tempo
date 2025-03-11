import styled from 'styled-components'

export const WeatherInfromation5days = ({ weather5Days }) => {

    const dailyForeCast = {}

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString() //convertendo data unix timestamp para o formato conhecido pelo usuário

        if (!dailyForeCast[date]) { // pegando a variável date que contém a data convertida
            dailyForeCast[date] = forecast
        }
    }

    const next5DaysForeCast = Object.values(dailyForeCast).slice(1, 6)
    // pegando os valores da posição 1 até a 5 que estão dentro do objeto daylyForeCast e transformdo-o em array

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })
        return newDate
    }

    return (
        <DivContainer>
            <H2>Previsão para os próximos 5 dias</H2>
            <DivCard>
                {next5DaysForeCast.map(foreCast => (
                    <DivDetails key={foreCast.dt}>
                        <P>{convertDate(foreCast)}</P>
                        <img src={`https://openweathermap.org/img/wn/${foreCast.weather[0].icon}.png`} alt={`Imagem da previsão do tempo de ${foreCast.name}`} />
                        <Description>{foreCast.weather[0].description}</Description>
                        <p>{Math.round(foreCast.main.temp_min)}°C / {Math.round(foreCast.main.temp_max)}°C</p>
                    </DivDetails>
                )
                )}
            </DivCard>
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
    font-size: 1.5rem;
    margin-bottom: 15px;
`

const DivCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap:10px;
`

const DivDetails = styled.div`
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    padding: 15px;
    min-width: 150px;
`

const P = styled.p`
    text-transform: capitalize;
    font-size: 1.1rem
`

const Description = styled.p`
    text-transform: capitalize;
    font-size: 1.1rem
`