import { Lightbulb, Radio, Car, Bell, Zap, Database, BarChart3, Sun, Settings } from 'lucide-react';

export function SmartStreetlightFlowchart() {
  return (
    <div className="w-full max-w-3xl mx-auto p-3">
      <div className="relative">
        {/* Input Sources */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-2.5 flex flex-col items-center text-center">
            <Lightbulb className="w-6 h-6 text-amber-600 mb-1.5" />
            <h3 className="font-semibold text-amber-900 text-xs mb-0.5">Smart Streetlights</h3>
            <p className="text-[11px] text-amber-700">Brightness &amp; Status</p>
          </div>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-2.5 flex flex-col items-center text-center">
            <Car className="w-6 h-6 text-amber-600 mb-1.5" />
            <h3 className="font-semibold text-amber-900 text-xs mb-0.5">Ambient</h3>
            <p className="text-[11px] text-amber-700">Environmental Sensors</p>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-amber-400 to-indigo-500"></div>
            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-indigo-500"></div>
          </div>
        </div>

        {/* Magistrala Platform */}
        <div className="bg-gradient-to-r from-indigo-100 to-blue-100 border-2 border-indigo-300 rounded-lg p-2.5 mb-2">
          <div className="flex items-center gap-2.5">
            <Database className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-xs text-indigo-900 mb-1">Magistrala Platform</h3>
              <div className="flex flex-wrap gap-1">
                <span className="inline-flex items-center gap-1 bg-indigo-200 text-indigo-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">
                  <Radio className="w-2.5 h-2.5" /> LoRaWAN
                </span>
                <span className="inline-flex items-center gap-1 bg-indigo-200 text-indigo-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">
                  <Radio className="w-2.5 h-2.5" /> NB-IoT
                </span>
                <span className="inline-flex items-center gap-1 bg-indigo-200 text-indigo-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">
                  <Radio className="w-2.5 h-2.5" /> Wi-Fi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-indigo-500 to-violet-500"></div>
            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-violet-500"></div>
          </div>
        </div>

        {/* Smart Rules Engine */}
        <div className="bg-violet-50 border-2 border-violet-300 rounded-lg p-2.5 mb-2">
          <div className="flex items-center gap-2.5">
            <Settings className="w-8 h-8 text-violet-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-xs text-violet-900 mb-1">Smart Rules Engine</h3>
              <ul className="space-y-0.5 text-[11px] text-violet-800">
                <li className="flex items-center gap-1">
                  <Zap className="w-2.5 h-2.5" /> Schedule-based Dimming
                </li>
                <li className="flex items-center gap-1">
                  <Sun className="w-2.5 h-2.5" /> Ambient Light Adaptation
                </li>
                <li className="flex items-center gap-1">
                  <Car className="w-2.5 h-2.5" /> Traffic-responsive Control
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-violet-500 to-cyan-500"></div>
            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-cyan-500"></div>
          </div>
        </div>

        {/* Automated Actions */}
        <div className="bg-cyan-50 border-2 border-cyan-300 rounded-lg p-2.5 mb-2">
          <div className="flex items-center gap-2.5">
            <Bell className="w-8 h-8 text-cyan-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-xs text-cyan-900 mb-1">Automated Actions</h3>
              <div className="flex flex-wrap gap-1">
                <span className="bg-cyan-200 text-cyan-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">Fault Alerts</span>
                <span className="bg-cyan-200 text-cyan-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">Dynamic Dimming</span>
                <span className="bg-cyan-200 text-cyan-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">Energy Reports</span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-cyan-500 to-emerald-500"></div>
            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-emerald-500"></div>
          </div>
        </div>

        {/* City Dashboard */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-lg p-2.5">
          <div className="flex items-center gap-2.5">
            <BarChart3 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-xs text-emerald-900 mb-0.5">City Operations Dashboard</h3>
              <p className="text-[11px] text-emerald-800">Unified monitoring, analytics, and cost optimization across the grid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
