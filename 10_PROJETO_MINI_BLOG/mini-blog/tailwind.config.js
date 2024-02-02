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
                "30vw": "30vw"
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