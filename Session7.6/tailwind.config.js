/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "Poppins",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    '"Segoe UI"',
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    '"Open Sans"',
                    '"Helvetica Neue"',
                    "sans-serif",
                ],
                volkhov: ["Volkhov", "serif"],
            },
            colors: {
                "custom-orange": "#df6951",
                "custom-blue": "#181e4b",
                "custom-gray": "#5e6282",
                "custom-dark": "#212832",
                "custom-yellow": "#f1a501",
                "custom-light-gray": "#686d77",
            },
            boxShadow: {
                "custom-yellow": "0px 20px 35px 0px rgba(241, 165, 1, 0.15)",
            },
        },
    },
    plugins: [],
};
