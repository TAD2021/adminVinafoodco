'use client'

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Announcements } from "@/components/dashboard/Annoucements";
import { LatestTransactions } from "@/components/dashboard/LatestTransactions";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { WeeklyRecap } from "@/components/dashboard/WeeklyRecap";
import { useState } from "react";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setIsOpen(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className={`w-full md:w-4/5 p-6 ml-auto`}>
                <Header toggleSidebar={toggleSidebar} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <StatsCard title="Total Users" value="10.928" change="12% more than previous week" />
                    <StatsCard title="Total Users" value="10.928" change="12% more than previous week" />
                    <StatsCard title="Total Users" value="10.928" change="12% more than previous week" />
                </div>
                <LatestTransactions />
                <Announcements />
                <WeeklyRecap />
            </div>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 backdrop" onClick={handleBackdropClick}></div>
            )}
        </div>
    );
}