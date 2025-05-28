import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
    return (
        <div className="main-container min-h-screen font-sans">
            <Header />
            <main>
                <Hero />
            </main>
        </div>
    );
}

export default App;
