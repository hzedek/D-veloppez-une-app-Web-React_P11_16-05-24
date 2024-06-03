import "../styles/Button.scss"

function Btn({text, onClick }) {
    return <div className="btn" onClick={onClick}><p>{text}</p></div>
}

export default Btn