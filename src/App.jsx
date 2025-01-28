import {useState} from "react";

const Card = ({title}) => {
    const [hasLiked, setHasLiked] = useState(false)
  return (
      <div className="card">
          <h2>{title}</h2>

          <button onClick={() => setHasLiked(true)}>
              Like
          </button>
      </div>
  )
}

const App = () => {
    return (
        <div className="card-container">
            <Card title="Star Wars" ratings={5} isCool={true} actors={[{name: 'Actors'}]} />
            <Card title="Avatar" />
            <Card title="The Lion King" />
        </div>
    )
}

export default App
