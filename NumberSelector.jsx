import { useState } from "react";

function NumberSelector() {
    const [selectedNum,setSelectedNum] = useState();
    const arrNumber = [1,2,3,4,5,6];
    return (
        <div>
            <div className="flex space-x-4">
                {
                arrNumber.map((value,i)=> (
                  
                       <div onClick={()=> setSelectedNum(value)} 
                        
                        key={i} className={`num-1 ${selectedNum === value ? 'bg-black text-white' : 'bg-white' }`}>{value}</div>
                  
                ))
            }
            </div>
            
         <p className="mt-5 text-right font-bold text-xl">Select Number</p>
        </div>
    )
}

export default NumberSelector;