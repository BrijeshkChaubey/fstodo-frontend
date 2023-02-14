export const isValidobjfield=(obj) =>{
    return Object.values(obj).every(value =>value.trim())   
   }
  export  const updateError =(error, stateUpdater)=>{
   stateUpdater(error);
   setTimeout(()=>{
       stateUpdater('');
   },2500)
   }
   export const isValidemail=(value)=>{
     const regx=  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   return regx .test(value)
   }