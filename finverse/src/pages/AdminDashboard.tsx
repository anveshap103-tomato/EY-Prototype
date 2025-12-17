import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, FileCheck, IndianRupee, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { MatrixBackground } from '../components/ui/MatrixBackground';

export const AdminDashboard = () => {
    const navigate = useNavigate();

    const stats = [
        {
            title: 'Active Users',
            value: '12',
            change: 'LAST 24H',
            icon: Users,
            color: 'bg-blue-500',
            textColor: 'text-blue-500'
        },
        {
            title: 'Loans Sanctioned',
            value: '45',
            change: 'LAST 24H',
            icon: FileCheck,
            color: 'bg-emerald-500',
            textColor: 'text-emerald-500'
        },
        {
            title: 'Total Disbursed',
            value: '₹2.5Cr',
            change: 'LAST 24H',
            icon: IndianRupee,
            color: 'bg-purple-500',
            textColor: 'text-purple-500'
        },
        {
            title: 'Avg. Processing Time',
            value: '2m 30s',
            change: 'LAST 24H',
            icon: Activity,
            color: 'bg-orange-500',
            textColor: 'text-orange-500'
        }
    ];

    const logs = [
        {
            time: '10:42 AM',
            agent: 'Master Agent',
            message: 'Routed user to Sales Agent',
            status: 'Success',
            statusColor: 'bg-emerald-500/20 text-emerald-400'
        },
        {
            time: '10:43 AM',
            agent: 'Sales Agent',
            message: 'Negotiated interest rate (10.5%)',
            status: 'Success',
            statusColor: 'bg-emerald-500/20 text-emerald-400'
        },
        {
            time: '10:44 AM',
            agent: 'Verification Agent',
            message: 'Verified PAN ABCDE1234F',
            status: 'Verified',
            statusColor: 'bg-emerald-500/20 text-emerald-400'
        },
        {
            time: '10:45 AM',
            agent: 'Underwriting Agent',
            message: 'Approved loan amount ₹5,00,000',
            status: 'Approved',
            statusColor: 'bg-emerald-500/20 text-emerald-400'
        },
        {
            time: '10:45 AM',
            agent: 'Sanction Agent',
            message: 'Generated Sanction Letter PDF',
            status: 'Generated',
            statusColor: 'bg-emerald-500/20 text-emerald-400'
        }
    ];

    return (
        <div className="min-h-screen bg-navy-900 text-slate-100 relative overflow-hidden font-sans">
            <MatrixBackground />

            <div className="relative z-10 container mx-auto px-6 py-8 max-w-7xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => navigate('/')}
                        className="p-2 rounded-full hover:bg-navy-800 transition-colors text-slate-300 hover:text-white"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-xl p-6 relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-lg ${stat.color} bg-opacity-20`}>
                                    <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                                </div>
                                <span className="text-xs font-semibold text-slate-500">{stat.change}</span>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                                <p className="text-sm text-slate-400">{stat.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Agent Orchestration Logs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass rounded-xl p-8"
                >
                    <h2 className="text-lg font-bold text-primary mb-6">Agent Orchestration Logs</h2>

                    <div className="space-y-6 relative">
                        {/* Vertical Line for Timeline - Purely visual decoration */}
                        <div className="absolute left-[8.5rem] top-4 bottom-4 w-px bg-navy-700 hidden md:block"></div>

                        {logs.map((log, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + (index * 0.1) }}
                                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group"
                            >
                                <span className="text-sm text-slate-500 w-24 font-mono shrink-0">{log.time}</span>

                                <div className="text-sm font-semibold text-blue-400 w-40 shrink-0 relative">
                                    {/* Dot on timeline */}
                                    <div className="hidden md:block absolute -left-[2.1rem] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-navy-900 border-2 border-slate-700 group-hover:border-primary transition-colors"></div>
                                    {log.agent}
                                </div>

                                <div className="flex-grow text-slate-300 text-sm">
                                    {log.message}
                                </div>

                                <div className={`px-3 py-1 rounded-full text-xs font-medium ${log.statusColor} shrink-0`}>
                                    {log.status}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
