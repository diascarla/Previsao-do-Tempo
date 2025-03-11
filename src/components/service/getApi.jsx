import { useRef, useState } from 'react';
import axios from 'axios';
import { WeatherInfromation } from '../weatherInformations';
import { WeatherInfromation5days } from '../weatherInformations5Day';
import styled from 'styled-components';

export function GetApi() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const inputRef = useRef(); // Pega o valor do input

  async function searchCity() {

    const city = inputRef.current.value; // busca o nome que o usuário digitou no input 
    const key = "ec455b27a69749c96db294d798387cdc"; // chave abtida no site da API

    const apiData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`) // &lang=pt_br - para informar a localidade - &units=metric - unidade de medida br (celsius)
    setWeather(apiData.data) // informações que vem da API

    const api5Days = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`)
    setWeather5Days(api5Days.data)
  }

  return (
    <>

      <DivContainer>
        <H1>Previsão do tempo</H1>

        <Input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />

        <Button onClick={searchCity}>Buscar</Button>

        {weather && <WeatherInfromation weather={weather} />}
        {weather5Days && <WeatherInfromation5days weather5Days={weather5Days} />}

      </DivContainer>
    </>
  )
}

const DivContainer = styled.div`
  max-width: 1000px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
`

const H1 = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin: 0 auto;
`

const Input = styled.input`
  padding: 10px;
  border-radius: 20px 0 0 20px;
  border: none;
  width: 60%;
  max-width: 300px;
  outline: none;
  margin-top: 30px;
`

const Button = styled.button`
  background: #ff9800;
  border-radius: 0 20px 20px 0;
  border: 0;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &{
    background: #f57c00
  }
`