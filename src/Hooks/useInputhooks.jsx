import { useState } from "react"

const useInputhooks  = (defaultValue) =>{
    const [fieldvalue, setFieldValue] = useState(defaultValue);

    const handleOnchange  = e=>{
        setFieldValue(e.target.value);
    }

    return [fieldvalue, handleOnchange];
}

export default useInputhooks;