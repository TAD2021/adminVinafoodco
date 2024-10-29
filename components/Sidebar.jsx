import Image from "next/image";
import { FaExchangeAlt, FaFileAlt, FaCogs, FaSignOutAlt, FaQuestionCircle, FaUserCog, FaChartLine, FaBox, FaTachometerAlt, FaUsers } from "react-icons/fa";

export const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`fixed left-0 top-0 h-full bg-gray-800 p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-1/5 w-1/3 z-50`}>
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <Image
                        width={50}
                        height={50}
                        alt="User  profile picture" 
                        className="rounded-full mr-4"
                        src="https://storage.googleapis.com/a1aa/image/eZwkVHxKW1y3NKXhvxeRcbCOdCwHTV6aThPbl0fik3MgIjWnA.jpg" 
                    />
                    <div>
                        <div className="font-bold">user1</div>
                        <div className="text-sm text-gray-400">Administrator</div>
                    </div>
                </div>
                <button className="md:hidden text-gray-400" onClick={toggleSidebar}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <nav>
                <ul>
                    <li className="mb-4">
                        <a className="flex items-center p-2 bg-gray-700 rounded" href="#">
                            <FaTachometerAlt className='mr-3' />
                            Dashboard
                        </a>
                    </li>
                    <li className="mb-4">
                        <a className="flex items-center p-2" href="#">
                            <FaUsers className='mr-3' />
                            Users
                        </a>
                    </li>
                    <li className="mb-4">
                        <a className="flex items-center p-2" href="#">
                            <FaBox className='mr-3' />
                            Products
                        </a>
                    </li>
                    <li className="mb-4">
                        <a className="flex items-center p-2" href="#">
                            <FaExchangeAlt className='mr-3' />
                            Transactions
                        </a>
                    </li>
                    <li className="mb-4">
                        <a className="flex items-center p-2" href="#">
                            <FaChartLine className='mr-3' />
                            Revenue
                        </a>
                    </li>
                    <li className="mb-4">
                        <a className="flex items-center p-2" href="#">
                            <FaFileAlt className='mr-3' />
                            Reports
                        </a>
                    </li>
                    <li className="mb-4">
                        <a className="flex items-center p-2" href="#">
                            <FaUserCog className='mr-3' />
                            Teams
                        </a>
                    </li>
                    <li className="mb-4">
                        <a className="flex items-center p-2" href="#">
                            <FaCogs className='mr-3' />
                            Settings
                        </a>
                    </li>
                    <li className="mb-4">
                        <a className="flex items-center p-2" href="#">
                            <FaQuestionCircle className='mr-3' />
                            Help
                        </a>
                    </li>
                    <li className="mb-4">
                        <a className="flex items-center p-2" href="#">
                            <FaSignOutAlt className='mr-3' />
                            Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};