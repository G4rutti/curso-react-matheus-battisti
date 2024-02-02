/** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing:{
                "80vw": '80vw',
                "70vw": "70vw",
                "40vw": "40vw",
                "30vw": "30vw",
                "20vw": "20vw",
                "40vh": "40vh",
                "50vw": "50vw",
                "50vh": "50vh",
                "60vh": "60vh",
                "80vh": "80vh",
                "90vh": "90vh",
                "100vh": "100vh",

            }
        },
    },
    plugins: [],
    "tailwindCSS.includeLanguages": { 
    "plaintext": "javascript" ,
    "html": "HTML"},
    "tailwindCSS.emmetCompletions": true, // remove this line if you don't use Emmet
    "editor.inlineSuggest.enabled": true,
    "editor.quickSuggestions": {
        "strings": true
    },
    "css.validate": false,
    "editor.quickSuggestions": { "strings": "on" },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    }
  }