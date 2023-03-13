interface ChuckJokeProps {
    joke: string;
    id: number;
}

const ChuckJoke: React.FC<ChuckJokeProps> = (props) => <p>{props.joke}</p>



export default ChuckJoke;
