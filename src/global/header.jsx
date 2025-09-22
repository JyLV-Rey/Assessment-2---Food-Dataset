import { Link } from "react-router-dom";
import {
  BoxesIcon,
  ChartBar,
  ClipboardList,
  House,
  UserCircle2,
} from "lucide-react";

export default function Header() {
  const text_class =
    "text-sm hover:shadow-lg rounded-lg hover:scale-105 hover:font-bold duration-200 text-center ease(--my-beizer) h-fit p-5 md:p-2 md:text-lg lg:text-xl";
  return (
    <div className="fixed z-50 flex justify-around w-full text-sm font-light header text-neutral-700 drop-shadow-lg/10 backdrop-blur-sm">
      <section className="flex w-full">
        <nav className="flex flex-row items-center w-full px-4 justify-betwen md:p-2">
          <div className="flex items center md:text-lg lg:text-xl">
            <Link
              to="/"
              className={`self-start text-neutral-600 hover:text-neutral-900 md:w-60`}
            >
              <House className="w-8 h-8 text-sm md:mr-2 md:mb-1 md:inline md:h-5 md:w-5" />
              <span className="hidden md:inline">Home Stats</span>
            </Link>
          </div>

          <ul className="flex flex-row items-center justify-end w-full md:gap-2 lg:gap-5">
            <li className="flex">
              <Link
                to="/store"
                className={`hover:text-neutral-700 ${text_class}`}
              >
                <ClipboardList className="w-8 h-8 md:mr-2 md:mb-1 md:inline md:h-5 md:w-5" />
                <span className="hidden md:inline">Store</span>
              </Link>
            </li>

            <li className="flex">
              <Link
                to="/items"
                className={`hover:text-neutral-700 ${text_class}`}
              >
                <BoxesIcon className="w-8 h-8 md:mr-2 md:mb-1 md:inline md:h-5 md:w-5" />
                <span className="hidden md:inline">Items</span>
              </Link>
            </li>

            <li className="flex">
              <Link
                to="/temporal"
                className={`hover:text-neutral-700 ${text_class}`}
              >
                <ChartBar className="w-8 h-8 md:mr-2 md:mb-1 md:inline md:h-5 md:w-5" />
                <span className="hidden md:inline">Temporal Stats</span>
              </Link>
            </li>

            <li className="flex">
              <Link
                to="/advanced"
                className={`hover:text-neutral-700 ${text_class}`}
              >
                <UserCircle2 className="w-8 h-8 md:mr-2 md:mb-1 md:inline md:h-5 md:w-5" />
                <span className="hidden md:inline">Advanced Stats</span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
