import React,{useState} from 'react';
export const multiStepContext=React.createContext();


const StepContext = () => {
    const [currentStep,setCurrentStep]=useState(1);
    const [userData,setUserData]=useState([]);
    const [finalData,setFinalData]=useState([]);
  return (
    <div>
        <multiStepContext.Provider value={{currentStep,setCurrentStep,userData,setUserData,finalData,setFinalData}}>
          {this.props.children}
        </multiStepContext.Provider>

    </div>
  )
}

export default StepContext;