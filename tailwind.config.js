/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
 ],
  theme: {
   
    extend: {

      animation:{
        pulse: ' pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      },
       keyframes:{
         pulse:{
           '0%, 100%':{
            opacity: 1
           },
 
           '50%': {
             opacity: 0
           }
         }
       },
 
    
 
       fontFamily: {
         inter: 'Inter'
       },
 
       backgroundColor: {
         'filterlight' : 'rgba(255, 255, 255, 0.87);'
        },
 
 


      
     
    },
  },
  plugins: [],
}
