import Link from "next/link";
import { FaArrowDown } from 'react-icons/fa';

const SecondaryBlackButton = () => {
  return (
    <Link href="#">
      <button className="btn-secondary bg-text text-white">
        WHAT WE COVER <FaArrowDown className="arrow-icon ml-2" />
      </button>
    </Link>
  );
};

export default SecondaryBlackButton;