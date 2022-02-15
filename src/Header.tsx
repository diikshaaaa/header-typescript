import React, {useState} from 'react'

interface HeaderProps{
    buttonText?: String;
    // this means we may or may not have buttonText 
}

interface Movie{
    title: string;
    date: string;
    rating: string;
    description: string;
}

export default function Header({buttonText}: HeaderProps) {
    const [count, setCount] = useState(0);
    // useState is a hook and 0 is an initial state 
    // const [movies, setMovies] = useState<Movie | null>(null);

    const increment = () => {
        setCount(count + 1);
    };
    
    return (
        <div>
            <h1>Header</h1>
            <button onClick={increment}>{buttonText || 'Click the button'}
            {/* buttonText || 'Click the button' means either the text you mentioned will be shown or 'click the button' will be shown*/}
            </button>
            <p>{count}</p>
        </div>
    );
}
