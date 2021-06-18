import React from 'react';
import { useForm } from '@formspree/react';
import { AlertError } from '../components' 

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvodrrdy");
  const labelClass = 'block text-gray-700 text-sm font-bold mb-2'
  const inputClass = 'mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
  
  if (state.succeeded) {
      return(
		<div className="prose">
			<h2>¡Excelente, empezamos pronto ! <span role="img" aria-label="emoji">🚀</span></h2>
		</div>
	  )
  }
  
  const errorDisplay = state.errors.length > 0 ? "block" : "hidden";
  return (
     <form onSubmit={handleSubmit}>
	  <AlertError text="Por favor llena el formulario" display={errorDisplay}/>
	  
	  <label htmlFor="name" className={labelClass} >
        Nombre Completo *
      </label>
      <input
        id="name"
        type="text" 
        name="name"
		className={inputClass} 
      />
		
		
      <label htmlFor="email" className={labelClass} >
        Dirección de email *
      </label>
      <input
        id="email"
        type="email" 
        name="email"
		className={inputClass} 
      />
	  
	  
	  <label htmlFor="message" className={labelClass}>
        Mensaje *
      </label>
      <textarea
        id="message"
        name="message"
		rows="6"
		className={inputClass}
      />
	  
      <button onClick={()=> console.log(state)} type="submit" disabled={state.submitting} className="w-full font-bold p-4 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 text-white rounded-md">
        Enviar Mensaje
      </button>
    </form>
  );
}
