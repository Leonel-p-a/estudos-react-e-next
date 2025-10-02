'use client'
// torna os componentes como Client Components para habilitar interações

import { useState } from "react";
// importa o hook de estado para permitir atualizar os componentes

export default function ProjetoIMC() {
    const [kgValue, setKGValue] = useState('');
    const [heightValue, setHeightValue] = useState('');
    const [result, setResult] = useState('');
    // estado para armazenar os valores de KG, altura e resultado

    function getKGValue( e: any ) {
        setKGValue( e.target.value );
    }
    
    function getHeightValue( e: any ) {
        setHeightValue( e.target.value );
    }
    // funções para "setar" um novo estado (valor) para os componentes

    function calculateBMI(weight: number, height: number): string {
        // função para calcular o imc e retornar o valor referente
        let bmi = weight / (height * height);
        let result;

        if (bmi < 18) {
            result = 'Abaixo do peso';
        } else if (bmi > 18 && bmi < 25) {
            result = 'Peso normal';
        } else {
            result = 'Sobrepeso';
        }

        return `${bmi.toFixed(2)} - ${result}`;
    }

    function handleCalculate() {
        // função para lidar com os valores dos input ao clicar o botão
        const weight = parseFloat(kgValue);
        const height = parseFloat(heightValue);

        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            const bmiResult = calculateBMI(weight, height);
            setResult(bmiResult);
            // função que atualiza o componente que exibe o resultado
        } else {
            setResult('Por favor, insira valores válidos.');
        }
    }

    return (
        <div className="p-3">
            <h1 
            className="text-2xl font-bold pb-2">Cálculo IMC</h1>
            <hr />
            <p className="mt-1 mb-0.5">Digite seu peso:</p>
            <div className="flex gap-1.5">
                <input value={kgValue} onChange={getKGValue} type="text" name="" id="weight" className="bg-gray-200 text-gray-950" />
                <p>KG</p>
            </div>
            <p className="mt-1 mb-0.5">Digite sua altura:</p>
            <div className="flex gap-1.5 mb-8">
                <input value={heightValue} onChange={getHeightValue} type="text" name="" id="height" className="bg-gray-200 text-gray-950" />
                <p>M</p>
            </div>
            <button onClick={handleCalculate} className="bg-blue-500 p-2 hover:bg-blue-700 duration-300">Calcular</button>
            <p className="mt-2.5">Resultado: {result}</p>
        </div>
    )
}