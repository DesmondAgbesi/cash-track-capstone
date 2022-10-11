import React, { useState } from 'react';
import List from "../components/List"
import { useRouter } from "next/router"
import axios from "axios"

function Forms() {
  // const {register, handleSubmit, } =  useForm();

  // const onSubmit =(data) => {
  //   console.log(data)


  const [data, setData] = useState({
    title: "",
    body: "",
  });
  const [error, setError] = useState("")
  const router = useRouter()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.transact(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/transact`,
            {
                data
            }
        );
        router.push("/transact")
    } catch (error) {
        setError(error.message);
    }
  };

  return (
    <div className='form max-w-sm mx-auto w-96'>
      <h1 className='font-bold pb-4 text-xl'>Trasactions</h1>
      {error && (
          <h3 className="pb-6 text-left text-md text-gray-800">{error}</h3>
        )}
        <form id='form' onSubmit={handleSubmit}    /*handleSubmit(onSubmit)*/>
          <div className='grid gap-4'>
            <div className='input-group'>
              <input type="text" /*{...register('name')} */ onChange={handleChange} placeholder="Name of Activity" className="form-input" />
            </div >
            <select className='form-input' >
              <option value="Investment" defaultValue>Income</option>
              <option value="Expense" defaultValue>Expenses</option>
            </select>
            <div className='input-group'>
              <input type='number' onChange={handleChange} placeholder="Amount" className="form-input" />
            </div >
            <div className='submit-btn'>
              <button className='border py-2 text-white bg-indigo-500 w-full'>Submit Transaction</button>
            </div>
          </div>

        </form>
        <List />
    </div>
  )
}

export default Forms