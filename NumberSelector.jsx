import { useState } from "react";

function NumberSelector({selectedNum,setSelectedNum,error,setError}) {
    
    const arrNumber = [1,2,3,4,5,6];

    const numberSelectorHandlor = (value) => {
        setSelectedNum(value);
        setError("");
    }
    return (
        <div>
            <h2 className="text-xl text-red-600">{error}</h2>
            <div className="flex space-x-4">
                {
                arrNumber.map((value,i)=> (
                  
                       <div onClick={()=> numberSelectorHandlor(value) } 
                        
                        key={i} className={`num-1 ${selectedNum === value ? 'bg-black text-white' : 'bg-white' }`}>{value}</div>
                  
                ))
            }
            </div>
            
         <p className="mt-5 text-right font-bold text-xl">Select Number</p>
        </div>
    )
}

export default NumberSelector;