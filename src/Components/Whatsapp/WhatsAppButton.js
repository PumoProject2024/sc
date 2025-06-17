import "./WhatsAppButton.css";        
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({
  phone,
  message = "",
  size = 48,
}) => {
  // Encode the optional message & build the Wa.me link
  const url = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

  return (
    <a
      href={url}
      className="wa-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={size} />
    </a>
  );
};

export default WhatsAppButton;
