import { Radio, Cpu, Activity, Bell, Zap, Database, Wrench, Shield } from 'lucide-react';

export default function ColdStorageFlowchart() {
  return (
    <div className="w-full max-w-3xl mx-auto p-3">
      <div className="relative">
        {/* Input Sources */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="bg-slate-100 border-2 border-slate-300 rounded-lg p-2.5 flex flex-col items-center text-center">
            <Wrench className="w-6 h-6 text-slate-600 mb-1.5" />
            <h3 className="font-semibold text-slate-900 text-xs mb-0.5">Legacy Equipment</h3>
            <p className="text-[11px] text-slate-600">Modbus / OPC-UA / BACnet</p>
          </div>
          <div className="bg-slate-100 border-2 border-slate-300 rounded-lg p-2.5 flex flex-col items-center text-center">
            <Activity className="w-6 h-6 text-slate-600 mb-1.5" />
            <h3 className="font-semibold text-slate-900 text-xs mb-0.5">Industrial Sensors</h3>
            <p className="text-[11px] text-slate-600">Temperature / Vibration / Power</p>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-slate-400 to-sky-500"></div>
            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-sky-500"></div>
          </div>
        </div>

        {/* Edge Gateway */}
        <div className="bg-gradient-to-r from-sky-100 to-blue-100 border-2 border-sky-300 rounded-lg p-2.5 mb-2">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-8 h-8 text-sky-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-xs text-sky-900 mb-1">Edge Gateway</h3>
              <div className="flex flex-wrap gap-1">
                <span className="inline-flex items-center gap-1 bg-sky-200 text-sky-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">
                  <Radio className="w-2.5 h-2.5" /> Protocol Translation
                </span>
                <span className="inline-flex items-center gap-1 bg-sky-200 text-sky-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">
                  <Zap className="w-2.5 h-2.5" /> Local ML
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-sky-500 to-indigo-500"></div>
            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-indigo-500"></div>
          </div>
        </div>

        {/* Magistrala Cloud */}
        <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-2.5 mb-2">
          <div className="flex items-center gap-2.5">
            <Database className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-xs text-indigo-900 mb-1">Magistrala Cloud</h3>
              <ul className="space-y-0.5 text-[11px] text-indigo-800">
                <li className="flex items-center gap-1">
                  <Shield className="w-2.5 h-2.5" /> TLS/mTLS Secure Ingestion
                </li>
                <li className="flex items-center gap-1">
                  <Zap className="w-2.5 h-2.5" /> Centralized Device Management
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-indigo-500 to-amber-500"></div>
            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-amber-500"></div>
          </div>
        </div>

        {/* Predictive Maintenance */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-2.5 mb-2">
          <div className="flex items-center gap-2.5">
            <Bell className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-xs text-amber-900 mb-1">Predictive Maintenance</h3>
              <div className="flex flex-wrap gap-1">
                <span className="bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">Degradation Alerts</span>
                <span className="bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">Maintenance Workflows</span>
                <span className="bg-amber-200 text-amber-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">CMMS Integration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-amber-500 to-emerald-500"></div>
            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-emerald-500"></div>
          </div>
        </div>

        {/* Operational Dashboard */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-lg p-2.5">
          <div className="flex items-center gap-2.5">
            <Activity className="w-8 h-8 text-emerald-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-xs text-emerald-900 mb-0.5">Operational Dashboard</h3>
              <p className="text-[11px] text-emerald-800">Equipment health, production metrics, and OEE across all facilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
