"use client"
import React, { useState } from 'react';


function MortgageCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [error, setError] = useState('');

  const calculateMonthlyPayment = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;

    if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || n <= 0) {
      setError('Please enter valid values for Principal and Loan Term.');
      return;
    }

    

    if (p && r && n) {
      const monthlyPayment = (p * r) / (1 - Math.pow(1 + r, -n));
      setMonthlyPayment(monthlyPayment.toFixed(2));
      setError('');
    } else {
      setMonthlyPayment(null);
    }
  };

  return (
  <div className="p-4 bg-green-600 text-black border-4 border-black rounded-xl w-1/2">
  <h1 className="text-3xl font-bold mb-4 text-center">Mortgage Calculator</h1>
  <div className="block font-bold mt-6 mb-10 w-80% flex justify-center">
    <label className="block font-bold mb-2">
      Principal Amount:
      <input
        type="number"
        className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
      />
    </label>
  </div>
  <div className="block font-bold mb-10 w-80% flex justify-center">
    <label className="block mb-2">
      Interest Rate (%):
      <input
        type="number"
        className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
    </label>
  </div>
  <div className="block font-bold mt-6 mb-10 w-80% flex justify-center">
    <label className="block mb-2">
      Loan Term (years):
      <input
        type="number"
        className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </label>
  </div>
  <div className='flex justify-center mb-10'>
    <button onClick={calculateMonthlyPayment} className="bg-black text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark">
      Calculate Monthly Payment
    </button>
  </div>
  {error && 
        <div className='text-center mb-2'>
          <p className='font-bold text-red-500'>{error}</p>
        </div>
  }
  {monthlyPayment && 
    <div className='text-center mb-2'>
      <h2 className='font-bold text-black text-lg'>Result:</h2>
      <p className='font-bold text-black text-md'>Monthly Payment: ${monthlyPayment}</p>
    </div>
  }
</div>

  );
}

export default MortgageCalculator;
