import { useState } from 'react';
import { motion } from 'framer-motion';
import HeartBackground from '../components/HeartBackground';
import heartBg from '../assets/a11.png';

function ImageAnalysis() {
  const [formData, setFormData] = useState({
    age: '',
    sex: 'Female',
    bloodSugar: '',
    bloodPressure: '',
    cholesterol: '',
    maxHeartRate: '',
    chestPainType: '',
    ecgResults: ''
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setFormData({
      age: '',
      sex: 'Female',
      bloodSugar: '',
      bloodPressure: '',
      cholesterol: '',
      maxHeartRate: '',
      chestPainType: '',
      ecgResults: ''
    });
    setResults(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults({
      riskLevel: 'Moderate',
      recommendations: [
        'Schedule regular check-ups',
        'Monitor blood pressure',
        'Maintain a healthy diet',
        'Exercise regularly'
      ]
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 relative bg-gradient-to-br from-gray-900 to-red-900">
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
      <HeartBackground />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Heart Disease Risk Assessment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 drop-shadow-md"
          >
            Enter your health metrics below for a comprehensive analysis
          </motion.p>
        </div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-white text-sm font-medium mb-2">Age (27 above):</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-white text-sm font-medium mb-2">Sex:</label>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-white text-sm font-medium mb-2">Chest Pain Type (0-3):</label>
                <input
                  type="number"
                  name="chestPainType"
                  value={formData.chestPainType}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-white text-sm font-medium mb-2">Blood Pressure (94-200):</label>
                <input
                  type="number"
                  name="bloodPressure"
                  value={formData.bloodPressure}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  required
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-white text-sm font-medium mb-2">Cholesterol (126-564):</label>
                <input
                  type="number"
                  name="cholesterol"
                  value={formData.cholesterol}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-white text-sm font-medium mb-2">Blood Sugar (0 or 1):</label>
                <input
                  type="number"
                  name="bloodSugar"
                  value={formData.bloodSugar}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-white text-sm font-medium mb-2">ECG Results (0-2):</label>
                <input
                  type="number"
                  name="ecgResults"
                  value={formData.ecgResults}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-white text-sm font-medium mb-2">Max Heart Rate (71-202):</label>
                <input
                  type="number"
                  name="maxHeartRate"
                  value={formData.maxHeartRate}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  required
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center gap-6"
          >
            <button
              type="button"
              onClick={handleReset}
              className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Reset Form
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Analyze Risk
            </button>
          </motion.div>
        </motion.form>

        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Analysis Results</h2>
            <div className="bg-white/20 rounded-xl p-6 mb-6">
              <p className="text-xl text-white mb-2">Risk Level: 
                <span className="font-bold ml-2 text-red-400">{results.riskLevel}</span>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Recommendations:</h3>
              <ul className="space-y-3">
                {results.recommendations.map((rec, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <span className="w-8 h-8 bg-red-500/30 rounded-full flex items-center justify-center text-white">
                      {index + 1}
                    </span>
                    {rec}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default ImageAnalysis;