import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  }
  return (
    <button className="cta-btn" onClick={navigateToLogin}>
      Get started
    </button>
  );
}
