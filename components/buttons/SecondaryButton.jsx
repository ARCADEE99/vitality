import Link from "next/link";
import { FaArrowDown } from 'react-icons/fa';

const SecondaryButton = () => {
  return (
    <Link href="#">
      <button className="btn-secondary bg-white text-text">
        WHO WE ARE <FaArrowDown className="arrow-icon ml-2" />
      </button>
    </Link>
  );
};

export default SecondaryButton;
