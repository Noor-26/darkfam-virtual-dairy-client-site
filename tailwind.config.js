module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#17C3B2",
'primary-content':"#000000",    
        
"secondary": "#F000B8",
        
"accent": "#37CDBE",
        
        
"base-100": "#181820", 

// "neutral-content":"#FFFFFF", 
           
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")], 
}
