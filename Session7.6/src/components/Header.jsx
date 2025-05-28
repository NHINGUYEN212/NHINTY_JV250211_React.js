export default function Header() {
    return (
        <header className="container mx-auto py-6 flex justify-between items-center">
            <a href="#" className="flex-shrink-0">
                <img src="/Logo.svg" alt="Jadoo Logo" className="h-8 w-auto" />
            </a>
            <nav>
                <ul className="flex space-x-12 items-center">
                    <li>
                        <a
                            href="#"
                            className="font-sans text-base text-custom-dark"
                        >
                            Desitnations
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-sans text-base text-custom-dark"
                        >
                            Hotels
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-sans text-base text-custom-dark"
                        >
                            Flights
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-sans text-base text-custom-dark"
                        >
                            Bookings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="font-sans text-base text-custom-dark"
                        >
                            Login
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="font-sans font-medium text-custom-dark border border-custom-dark rounded-[5px] px-5 py-2"
                        >
                            Sign up
                        </a>
                    </li>
                    <li>
                        <button className="font-sans font-medium text-custom-dark flex items-center">
                            EN
                            <img
                                src="/Dropdown.svg"
                                alt=""
                                className="ml-2 h-[5.5px] w-auto"
                            />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
