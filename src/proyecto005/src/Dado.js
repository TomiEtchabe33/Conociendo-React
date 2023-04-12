import './Dado.css'

function Dado(props) {
    return (
        <center><div className="dado-recuadro">{props.valor}</div></center>
    );
}

export default Dado