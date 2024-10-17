import { useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import "../Styles/Error.css"


const Error = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/');
  };

  const handleFormRedirect = () => {
    navigate('/form');
  };

  return (
    <div>
    <div className="ErrorPage">
  <div className="logo">
    <img src={Logo} alt="Logo" />
  </div>
  <h2>Error Page</h2>
  <p>An error occurred!</p>
  <button onClick={handleLoginRedirect}>Login</button>
  <button onClick={handleFormRedirect}>Form</button>
</div>

    </div>
  );
};

export default Error;
