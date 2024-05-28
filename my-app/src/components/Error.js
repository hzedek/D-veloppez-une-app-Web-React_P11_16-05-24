import "../styles/Error.scss";
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="div_Error-center">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
     <Link to="/"> Retourner sur la page d’accueil</Link>
    </div>
  );
}
export default Error;
