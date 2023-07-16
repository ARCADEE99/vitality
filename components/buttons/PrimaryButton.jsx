import Link from "next/link";

const PrimaryButton = ({ buttonText }) => {
  return (
    <Link href="#">
      <button className="btn-primary">
          {buttonText}
        </button>
    </Link>
  )
}

export default PrimaryButton
