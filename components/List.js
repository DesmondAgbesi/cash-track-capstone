import React from 'react';
import { BiTrash } from 'react-icons/bi'

const trnsc=[{
  type: 'Income',
  color: '#a9c24f',
},
{
  type: 'Expenses',
  color: '#f9c74f',
},

]
function List() {
  return (
    <div className='flex flex-col py-6 gap-3'>
       <h1 className='py-4 font-bold text-xl'>History</h1>
       <div>
        {
          trnsc.map((v, i)=> <Transaction key= {i} category={v} />
          )
        }
       </div>
    </div>
  )
}

function Transaction({category}){
  if(!category) return null;
  return(
    <div className='flex justify-center gap-4 mb-5' style={{borderRight:`8px solid ${category.color}`}}>
      
      <button><BiTrash size={15} color={category.color}/></button>
      <span className='block w-full'>{category.type}</span>
    </div>
  )
}



export default List