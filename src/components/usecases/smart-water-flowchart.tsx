import { Droplets, Radio, Gauge, Activity, Bell, Zap, Database, Workflow } from 'lucide-react';

export default function SmartWaterFlowchart() {
  return (
    <div className="w-full max-w-3xl mx-auto p-3">
      <div className="relative">
        {/* Input Sources */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-2.5 flex flex-col items-center text-center">
            <Droplets className="w-6 h-6 text-blue-600 mb-1.5" />
            <h3 className="font-semibold text-blue-900 text-xs mb-0.5">Water Meters</h3>
            <p className="text-[11px] text-blue-700">Continuous Telemetry</p>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-2.5 flex flex-col items-center text-center">
            <Gauge className="w-6 h-6 text-blue-600 mb-1.5" />
            <h3 className="font-semibold text-blue-900 text-xs mb-0.5">Pressure Sensors</h3>
            <p className="text-[11px] text-blue-700">Real-time Monitoring</p>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-blue-400 to-purple-500"></div>
            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-purple-500"></div>
          </div>
        </div>

        {/* Magistrala Ingestion */}
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 border-2 border-purple-300 rounded-lg p-2.5 mb-2">
          <div className="flex items-center gap-2.5">
            <Database className="w-8 h-8 text-purple-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-xs text-purple-900 mb-1">Magistrala Ingestion</h3>
              <div className="flex flex-wrap gap-1">
                <span className="inline-flex items-center gap-1 bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">
                  <Radio className="w-2.5 h-2.5" /> MQTT
                </span>
                <span className="inline-flex items-center gap-1 bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">
                  <Radio className="w-2.5 h-2.5" /> CoAP
                </span>
                <span className="inline-flex items-center gap-1 bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">
                  <Radio className="w-2.5 h-2.5" /> HTTP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-purple-500 to-emerald-500"></div>
            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-emerald-500"></div>
          </div>
        </div>

        {/* Real-time Analytics */}
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-lg p-2.5 mb-2">
          <div className="flex items-center gap-2.5">
            <Activity className="w-8 h-8 text-emerald-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-xs text-emerald-900 mb-1">Real-time Analytics</h3>
              <ul className="space-y-0.5 text-[11px] text-emerald-800">
                <li className="flex items-center gap-1">
                  <Zap className="w-2.5 h-2.5" /> Anomaly Detection
                </li>
                <li className="flex items-center gap-1">
                  <Zap className="w-2.5 h-2.5" /> Leak Localization
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-emerald-500 to-orange-500"></div>
            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-orange-500"></div>
          </div>
        </div>

        {/* Automated Alerts */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-2.5 mb-2">
          <div className="flex items-center gap-2.5">
            <Bell className="w-8 h-8 text-orange-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-xs text-orange-900 mb-1">Automated Alerting</h3>
              <div className="flex flex-wrap gap-1">
                <span className="bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">SCADA</span>
                <span className="bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">Ticketing</span>
                <span className="bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded-full text-[11px] font-medium">Notifications</span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-gradient-to-b from-orange-500 to-red-500"></div>
            <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-red-500"></div>
          </div>
        </div>

        {/* Team Action */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 rounded-lg p-2.5">
          <div className="flex items-center gap-2.5">
            <Workflow className="w-8 h-8 text-red-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-xs text-red-900 mb-0.5">Faster Team Response</h3>
              <p className="text-[11px] text-red-800">Streamlined incident workflows enable rapid action</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
