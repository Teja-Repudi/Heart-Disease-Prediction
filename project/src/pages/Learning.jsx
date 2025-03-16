import { motion } from 'framer-motion';
import { FaHeartbeat, FaChartLine, FaStethoscope, FaPowerOff } from 'react-icons/fa';
import heartBg from '../assets/a11.png';

function Learning() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-100 to-white flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heartBg})`,
          backgroundSize: '600px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          filter: 'blur(0.5px)'
        }}
      />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-200"
      >
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12 drop-shadow-sm relative z-10">
          Fedarated Learning Control
        </h1>

        {/* Status Indicator */}
        <div className="flex items-center justify-center mb-8 relative z-10">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full border border-green-200"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/30"></div>
            <span className="text-green-700 font-medium text-lg">System Active</span>
          </motion.div>
        </div>

        {/* Control Buttons - Now in a vertical layout */}
        <div className="space-y-6 relative z-10">
          {/* Start Assessment Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full p-8 bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 text-gray-800 rounded-xl shadow-lg transition-all border border-red-200"
          >
            <div className="flex items-center gap-6">
              <motion.div 
                animate={{ boxShadow: ['0 0 20px #ef4444', '0 0 35px #ef4444', '0 0 20px #ef4444'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-4 bg-red-600 rounded-lg group-hover:bg-red-700 transition-colors"
              >
                <FaHeartbeat className="text-6xl text-white drop-shadow-2xl" />
              </motion.div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-red-900">Start Assessment</h3>
                <p className="text-lg text-red-700">Begin risk analysis process</p>
              </div>
            </div>
          </motion.button>

          {/* Monitor Metrics Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full p-8 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-gray-800 rounded-xl shadow-lg transition-all border border-blue-200"
          >
            <div className="flex items-center gap-6">
              <motion.div 
                animate={{ boxShadow: ['0 0 20px #3b82f6', '0 0 35px #3b82f6', '0 0 20px #3b82f6'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-4 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors"
              >
                <FaChartLine className="text-6xl text-white drop-shadow-2xl" />
              </motion.div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-blue-900">Monitor Metrics</h3>
                <p className="text-lg text-blue-700">Track health indicators</p>
              </div>
            </div>
          </motion.button>

          {/* Health Check Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full p-8 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 text-gray-800 rounded-xl shadow-lg transition-all border border-green-200"
          >
            <div className="flex items-center gap-6">
              <motion.div 
                animate={{ boxShadow: ['0 0 20px #22c55e', '0 0 35px #22c55e', '0 0 20px #22c55e'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-4 bg-green-600 rounded-lg group-hover:bg-green-700 transition-colors"
              >
                <FaStethoscope className="text-6xl text-white drop-shadow-2xl" />
              </motion.div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-green-900">Health Check</h3>
                <p className="text-lg text-green-700">System diagnostics</p>
              </div>
            </div>
          </motion.button>

          {/* Stop System Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full p-8 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-800 rounded-xl shadow-lg transition-all border border-gray-200"
          >
            <div className="flex items-center gap-6">
              <motion.div 
                animate={{ boxShadow: ['0 0 20px #4b5563', '0 0 35px #4b5563', '0 0 20px #4b5563'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-4 bg-gray-700 rounded-lg group-hover:bg-gray-800 transition-colors"
              >
                <FaPowerOff className="text-6xl text-white drop-shadow-2xl" />
              </motion.div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900">Stop System</h3>
                <p className="text-lg text-gray-700">Halt all processes</p>
              </div>
            </div>
          </motion.button>
        </div>

        {/* Information Note */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            This control center manages the heart disease risk assessment system.
            <br />
            Please ensure all processes are properly monitored and maintained.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Learning;