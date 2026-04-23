/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

interface Order {
  id: string;
  store: string;
  amount: string;
  status: "New" | "Processing" | "Shipped" | "Delivered";
  time: string;
  courier: string;
  _new?: boolean;
}

export function OrderDashboard() {
  const [orders, setOrders] = useState<Order[]>([
    { id: "#4021", store: "Aarong Lifestyle", amount: "৳ 2,340", status: "New", time: "just now", courier: "Pathao" },
    { id: "#4020", store: "Meena Bazar Online", amount: "৳ 890", status: "Processing", time: "2m ago", courier: "Steadfast" },
    { id: "#4019", store: "Shajgoj", amount: "৳ 1,650", status: "Shipped", time: "5m ago", courier: "RedX" },
    { id: "#4018", store: "Chaldal", amount: "৳ 4,200", status: "Delivered", time: "12m ago", courier: "Pathao" },
    { id: "#4017", store: "Daraz BD", amount: "৳ 760", status: "Processing", time: "18m ago", courier: "Steadfast" },
  ]);

  useEffect(() => {
    const newOrders: Order[] = [
      { id: "#4022", store: "Bikroy.com", amount: "৳ 3,100", status: "New", time: "just now", courier: "RedX" },
      { id: "#4023", store: "Shajgoj", amount: "৳ 560", status: "New", time: "just now", courier: "Pathao" },
      { id: "#4024", store: "Aarong Lifestyle", amount: "৳ 1,875", status: "New", time: "just now", courier: "Steadfast" },
    ];
    let idx = 0;
    const interval = setInterval(() => {
      const next = { ...newOrders[idx % newOrders.length], _new: true };
      setOrders(prev => [next, ...prev.slice(0, 4)]);
      idx++;
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getStatusStyles = (status: Order["status"]) => {
    switch (status) {
      case "New": return "text-blue-700 bg-blue-50 border-blue-200";
      case "Processing": return "text-amber-700 bg-amber-50 border-amber-200";
      case "Shipped": return "text-purple-700 bg-purple-50 border-purple-200";
      case "Delivered": return "text-green-700 bg-green-50 border-green-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_32px_80px_rgba(10,10,10,0.12),0_2px_8px_rgba(10,10,10,0.06)] border border-[#E8ECF2] overflow-hidden w-full max-w-[520px]">
      {/* Browser bar */}
      <div className="bg-[#F4F5F7] border-b border-[#E8ECF2] px-3.5 py-2.5 flex items-center gap-2.5">
        <div className="flex gap-1.5">
          {["#FF5F57", "#FEBC2E", "#28C840"].map(c => (
            <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="flex-1 bg-white rounded-md border border-[#E2E6EF] px-3 py-1 flex items-center gap-1.5">
          <Lock size={10} className="text-[#8896A5]" strokeWidth={2} />
          <span className="text-[11px] text-[#8896A5] font-medium">app.zerox.com.bd/orders</span>
        </div>
        <div className="flex items-center gap-1.5 bg-sky-brand/10 border border-sky-brand/30 rounded-full px-2.5 py-0.5">
          <div className="relative w-1.5 h-1.5 rounded-full bg-green-500">
            <div className="absolute inset-[-2px] rounded-full bg-green-500 opacity-40 animate-ping" />
          </div>
          <span className="text-[10px] text-sky-brand font-bold uppercase tracking-wider">Live</span>
        </div>
      </div>

      {/* Dashboard interior */}
      <div className="flex h-[360px]">
        {/* Mini sidebar */}
        <div className="w-11 bg-ink flex flex-col items-center pt-3.5 gap-3.5 shrink-0">
          {["layout-grid", "package", "truck", "bar-chart-2", "settings"].map((ico, i) => (
            <div key={ico} className={cn(
              "w-[30px] h-[30px] rounded-lg flex items-center justify-center transition-colors",
              i === 1 ? "bg-sky-brand/25" : "bg-transparent"
            )}>
              <Icon name={ico as any} size={14} className={i === 1 ? "text-sky-brand" : "text-white/30"} strokeWidth={1.6} />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Top stat strip */}
          <div className="flex bg-white border-b border-rule">
            {[
              { label: 'Orders today', value: '247', delta: '+12%' },
              { label: 'Revenue', value: '৳ 84K', delta: '+8%' },
              { label: 'Active couriers', value: '3', delta: '' },
            ].map((s, i) => (
              <div key={s.label} className={cn("flex-1 px-3.5 py-2.5", i < 2 && "border-r border-rule")}>
                <div className="text-[10px] text-[#8896A5] font-semibold uppercase tracking-wider mb-0.5">{s.label}</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-lg font-extrabold text-ink tracking-tight">{s.value}</span>
                  {s.delta && <span className="text-[10px] text-green-600 font-bold">{s.delta}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Order table header */}
          <div className="px-3.5 pt-2.5 pb-1.5 bg-white border-b border-[#F0F1F3]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="font-display text-[13px] font-bold text-ink">Live Orders</span>
                <span className="text-[10px] text-[#8896A5] font-medium">Round-robin active</span>
              </div>
              <div className="flex gap-1.5">
                {['Pathao', 'Steadfast', 'RedX'].map(c => (
                  <span key={c} className="text-[9px] text-ink-3 bg-[#F0F1F5] rounded-md px-1.5 py-0.5 font-semibold">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Order rows */}
          <div className="flex-1 overflow-hidden bg-white">
            {orders.map((o, i) => (
              <div
                key={`${o.id}-${i}`}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-1.5 border-b border-[#F5F6F8] transition-colors duration-500",
                  o._new && i === 0 ? "bg-sky-brand/[0.06] animate-in fade-in slide-in-from-top-2" : "bg-white"
                )}
              >
                <div className={cn("w-1.5 h-1.5 rounded-full shrink-0", o.status === 'New' ? "bg-sky-brand" : "bg-[#E2E6EF]")} />
                <span className="font-display text-[11px] font-bold text-ink-3 min-w-[38px]">{o.id}</span>
                <span className="text-[11px] text-ink font-medium flex-1 truncate">{o.store}</span>
                <span className="text-[11px] font-bold text-ink min-w-[58px] text-right">{o.amount}</span>
                <span className={cn(
                  "text-[9px] font-bold rounded-full px-1.5 py-0.5 whitespace-nowrap border",
                  getStatusStyles(o.status)
                )}>
                  {o.status}
                </span>
                <span className="text-[9px] text-ink-3 min-w-[48px]">{o.courier}</span>
                <span className="text-[9px] text-[#C4CDD6] min-w-[40px] text-right">{o.time}</span>
              </div>
            ))}
          </div>

          {/* Footer strip */}
          <div className="px-3.5 py-2 bg-[#F8F9FC] border-t border-rule flex justify-between items-center">
            <span className="text-[10px] text-[#8896A5]">Showing 5 of 247 orders</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-brand animate-ping opacity-80" />
              <span className="text-[10px] text-sky-brand font-semibold">Streaming via Socket</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
