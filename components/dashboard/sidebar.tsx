"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Cloudy, DollarSign, Home, TestTube, Thermometer } from "lucide-react";
import { Pod } from "@prisma/client";
import { FaTemperatureHigh } from "react-icons/fa";

const Sidebar = ({ pod }: { pod: Pod }) => {
    const pathname = usePathname();
    return (
        <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${pathname === `/pods/${pod.id}` ? 'text-gray-900 dark:text-gray-50' : ''}`}
                  href={`/pods/${pod.id}`}
                  rel="ugc"
                >
                  <Home className="w-4 h-4" />
                  Manage
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${pathname === `/pods/${pod.id}/temperature` ? 'text-gray-900 dark:text-gray-50' : ''}`}
                  href={`/pods/${pod.id}/temperature`}
                  rel="ugc"
                >
                  <Thermometer className="w-4 h-4" />
                  Temperature
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${pathname === `/pods/${pod.id}/turbidity` ? 'text-gray-900 dark:text-gray-50' : ''}`}
                  href={`/pods/${pod.id}/turbidity`}
                  rel="ugc"
                >
                  <Cloudy className="w-4 h-4" />
                  Turbidity
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${pathname === `/pods/${pod.id}/pH` ? 'text-gray-900 dark:text-gray-50' : ''}`}
                  href={`/pods/${pod.id}/pH`}
                  rel="ugc"
                >
                  <TestTube className="w-4 h-4" />
                  pH
                </Link>
              </nav>
    )
}

export default Sidebar;