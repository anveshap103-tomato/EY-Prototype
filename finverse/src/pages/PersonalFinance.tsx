import { Bot, CheckCircle, Shield, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Button } from '../components/ui/Button';

export const PersonalFinance = () => {
    // Mock Data for Budget Analysis
    const budgetData = [
        { name: 'Needs', value: 50, color: '#10B981', amount: '₹25,000' }, // Emerald-500
        { name: 'Wants', value: 30, color: '#6366F1', amount: '₹15,000' }, // Indigo-500
        { name: 'Savings', value: 20, color: '#F59E0B', amount: '₹10,000' }, // Amber-500
    ];

    const recommendations = [
        { id: 1, text: 'Start an SIP of ₹2,000', type: 'success' },
        { id: 2, text: 'Review Health Insurance', type: 'info' },
        { id: 3, text: 'Reduce dining out expenses', type: 'warning' },
    ];

    const investments = [
        {
            title: 'Bluechip Growth Fund',
            type: 'Mutual Fund',
            risk: 'High Risk',
            return: '+15.2%',
            desc: 'Large cap companies with high growth potential.',
        },
        {
            title: 'Gold ETF',
            type: 'Commodity',
            risk: 'Medium Risk',
            return: '+8.5%',
            desc: 'Digital gold investment for portfolio hedging.',
        },
        {
            title: 'Corporate Bond',
            type: 'Fixed Income',
            risk: 'Low Risk',
            return: '+7.1%',
            desc: 'Stable returns with regular interest payouts.',
        },
    ];

    const insurances = [
        {
            title: 'Health Guard',
            type: 'Health',
            coverage: '₹10 Lakhs',
            premium: '₹850/mo',
        },
        {
            title: 'Loan Shield Plus',
            type: 'Term Life',
            coverage: '₹1 Crore',
            premium: '₹1,200/mo',
        },
    ];

    return (
        <div className="min-h-screen bg-navy-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-200">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Personal Finance Dashboard</h1>
                        <p className="text-slate-400 mt-1">Your AI-powered financial wellness center.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" size="sm">Download Report</Button>
                        <Button size="sm">Sync Accounts</Button>
                    </div>
                </div>

                {/* Top Row: AI Coach & Budget Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* 1. AI Financial Coach Panel */}
                    <div className="lg:col-span-1 bg-navy-900/50 border border-navy-800 rounded-2xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Bot size={80} className="text-primary" />
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                <Bot size={24} />
                            </div>
                            <h2 className="text-xl font-semibold text-white">FinVerse Coach</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-navy-800/80 p-4 rounded-xl border border-navy-700">
                                <p className="text-slate-300 leading-relaxed text-sm">
                                    "Based on your spending, you can save <span className="font-bold text-emerald-400">₹5,000</span> more this month by reducing dining out. I recommend moving this to a <span className="text-white underline decoration-dashed underline-offset-4 cursor-pointer hover:text-primary">Liquid Fund</span> for 6% returns."
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-xs bg-navy-800 hover:bg-navy-700 text-slate-300 px-3 py-2 rounded-full border border-navy-700 transition-colors">
                                    How do I start?
                                </button>
                                <button className="text-xs bg-navy-800 hover:bg-navy-700 text-slate-300 px-3 py-2 rounded-full border border-navy-700 transition-colors">
                                    Show more tips
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 2. Monthly Budget Analysis */}
                    <div className="lg:col-span-2 bg-navy-900/50 border border-navy-800 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-semibold text-white">Monthly Budget Analysis</h2>
                            <span className="text-sm text-slate-400">December 2025</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                            <div className="h-64 w-full relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={budgetData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {budgetData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f1f5f9' }}
                                            itemStyle={{ color: '#f1f5f9' }}
                                            formatter={(value: any) => [`${value}%`, 'Allocation']}
                                        />
                                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                                    </PieChart>
                                </ResponsiveContainer>
                                {/* Centered Total */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
                                    <span className="text-sm text-slate-400">Total</span>
                                    <span className="text-xl font-bold text-white">₹50k</span>
                                </div>
                            </div>

                            <div className="space-y-4 pr-4">
                                <div className="flex items-center justify-between p-3 rounded-lg bg-navy-800/30 border border-navy-800 hover:bg-navy-800/50 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
                                        <span className="text-slate-200">Needs</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-medium">50%</div>
                                        <div className="text-xs text-slate-400">₹25,000</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-navy-800/30 border border-navy-800 hover:bg-navy-800/50 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.4)]" />
                                        <span className="text-slate-200">Wants</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-medium">30%</div>
                                        <div className="text-xs text-slate-400">₹15,000</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-navy-800/30 border border-navy-800 hover:bg-navy-800/50 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]" />
                                        <span className="text-slate-200">Savings</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-medium">20%</div>
                                        <div className="text-xs text-slate-400">₹10,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Row: Recommended Actions & Investment Discovery */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* 3. Recommended Actions */}
                    <div className="lg:col-span-1 bg-navy-900/50 border border-navy-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <TrendingUp className="text-amber-400" size={24} />
                            <h2 className="text-xl font-semibold text-white">Recommended Actions</h2>
                        </div>
                        <div className="space-y-3">
                            {recommendations.map((rec) => (
                                <div key={rec.id} className="flex items-start gap-3 group p-3 rounded-xl hover:bg-navy-800/50 transition-colors cursor-pointer">
                                    {rec.type === 'success' ? (
                                        <div className="mt-0.5 text-emerald-400 bg-emerald-400/10 p-1 rounded-full"><CheckCircle size={16} /></div>
                                    ) : rec.type === 'warning' ? (
                                        <div className="mt-0.5 text-amber-400 bg-amber-400/10 p-1 rounded-full"><AlertCircle size={16} /></div>
                                    ) : (
                                        <div className="mt-0.5 text-blue-400 bg-blue-400/10 p-1 rounded-full"><AlertCircle size={16} /></div>
                                    )}
                                    <div>
                                        <p className="text-slate-200 text-sm group-hover:text-white transition-colors">{rec.text}</p>
                                        <span className="text-xs text-slate-500 group-hover:text-slate-400">AI Generated • Just now</span>
                                    </div>
                                </div>
                            ))}
                            <Button variant="outline" className="w-full mt-4 text-xs border-dashed text-slate-400 hover:text-white hover:border-slate-500">
                                + Generate New Checklist
                            </Button>
                        </div>
                    </div>

                    {/* 4. Investment Discovery Section */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-white">Investment Discovery</h2>
                            <a href="#" className="text-sm text-primary hover:text-emerald-400 flex items-center gap-1">View All <ArrowRight size={14} /></a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {investments.map((inv, idx) => (
                                <div key={idx} className="bg-navy-900/50 border border-navy-800 rounded-xl p-5 hover:border-navy-600 transition-all hover:shadow-lg hover:shadow-navy-900/50 group">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-xs font-semibold px-2 py-1 rounded bg-navy-800 text-slate-400 border border-navy-700">{inv.type}</span>
                                        <span className="text-emerald-400 font-bold text-sm bg-emerald-400/10 px-2 py-1 rounded">{inv.return}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{inv.title}</h3>
                                    <p className="text-xs text-slate-400 mb-4 line-clamp-2">{inv.desc}</p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-navy-800/50">
                                        <span className={`text-xs font-medium ${inv.risk === 'High Risk' ? 'text-rose-400' : inv.risk === 'Medium Risk' ? 'text-amber-400' : 'text-emerald-400'}`}>
                                            {inv.risk}
                                        </span>
                                        <button className="text-sm font-semibold text-white hover:text-primary transition-colors">
                                            Invest Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* 5. Insurance & Protection */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <Shield className="text-primary" size={24} /> Insurance & Protection
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {insurances.map((ins, idx) => (
                            <div key={idx} className="bg-navy-900/50 border border-navy-800 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-navy-600 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-slate-300 border border-navy-700">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{ins.title}</h3>
                                        <div className="flex items-center gap-3 text-sm text-slate-400 mt-1">
                                            <span>{ins.type}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                            <span>Cover: <span className="text-slate-200">{ins.coverage}</span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                                    <div className="text-right hidden sm:block">
                                        <span className="block text-xs text-slate-500">Premium starts at</span>
                                        <span className="block text-sm font-semibold text-slate-200">{ins.premium}</span>
                                    </div>
                                    <Button className="w-full sm:w-auto">Get Quote</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
