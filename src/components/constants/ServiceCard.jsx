import Link from "next/link";
import Image from "next/image";

const ServiceCard = () => {
  return (
    <div>
      <Link href="/" className="flex flex-col pl-8 w-1/2 h-52 bg-neutral-400">
        <div className="flex justify-around flow-row">
          <Image
            // Path to the SVG file inside the `public` directory
            src="/644a9965b4060da6a3dbc180_libraria-logo.svg"
            width={100} // Specify width (optional)
            height={100} // Specify height (optional)
          />
          <button className="w-32 h-8 mt-4 bg-blue-900 rounded-full">
            SERVICES
          </button>
        </div>
        <p className="font-light w-3/5">
          libraria is a localization platform that allows to manage all
          translations for web and mobile app in one place and go global faster
        </p>
      </Link>
    </div>
  );
};

export default ServiceCard;
