import React, {useState} from 'react'
import Search from "./components/Search.jsx";

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')
    
    return (
        <main>
            <div className="pattern" />

            <div className="wrapper">
                <header>
                    <img src="public/hero.png" alt="Hero Banner" />
                    <h1>Find <span className="text-gradient">Movies</span> you'll enjoy without the Hassle</h1>

                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>
            </div>
        </main>
    )
}

export default App