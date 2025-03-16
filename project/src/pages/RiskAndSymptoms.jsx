import { useState } from 'react';
import { motion } from 'framer-motion';
import heartBg from '../assets/a11.png';
import toast from 'react-hot-toast'

function RiskAndSymptoms() {
  const [formData, setFormData] = useState({
    age: '',
    sex: 'Female',
    chestPainType: '',
    bloodPressure: '',
    cholesterol: '',
    bloodSugar: '',
    ecgResults: '',
    maxHeartRate: '',
    exerciseAngina: '0',
    exerciseRelative: '',
    slope: '',
    vessels: '',
    thalium: ''
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
      chestPainType: '',
      bloodPressure: '',
      cholesterol: '',
      bloodSugar: '',
      ecgResults: '',
      maxHeartRate: '',
      exerciseAngina: '0',
      exerciseRelative: '',
      slope: '',
      vessels: '',
      thalium: ''
    });
    setResults(null);
  };

  const handleSubmit = async () => {
    if (!validateInputs()) return;
    try {
      const response = await fetch('http://localhost:8000/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          age: formData.age,
          sex: formData.sex === 'Male' ? 1 : 0,
          cp: formData.chestPainType,
          trestbps: formData.bloodPressure,
          chol: formData.cholesterol,
          fbs: formData.bloodSugar,
          restecg: formData.ecgResults,
          thalach: formData.maxHeartRate,
          exang: formData.exerciseAngina,
          oldpeak: formData.exerciseRelative,
          slope: formData.slope,
          ca: formData.vessels,
          thal: formData.thalium
        })
      });
      const data = await response.json();
      setResults(data.prediction === 1 ? "High risk detected. Please consult a doctor." : "Low risk detected. Keep maintaining a healthy lifestyle.");
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  const validateInputs = () => {
    const { age, bloodPressure, cholesterol, maxHeartRate, exerciseRelative } = formData;
    if (age < 18 || age > 100) {
      alert('Age must be between 18 and 100.');
      return false;
    }
    if (bloodPressure < 50 || bloodPressure > 200) {
      alert('Blood Pressure must be between 50 and 200.');
      return false;
    }
    if (cholesterol < 100 || cholesterol > 400) {
      alert('Cholesterol must be between 100 and 400.');
      return false;
    }
    if (maxHeartRate < 60 || maxHeartRate > 220) {
      alert('Max Heart Rate must be between 60 and 220.');
      return false;
    }
    if (exerciseRelative < 0 || exerciseRelative > 10) {
      alert('Exercise Relative must be between 0 and 10.');
      return false;
    }
    return true;
  };

  return (
    <div 
      className="min-h-screen py-8 px-4 relative"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Heart Disease Risk Assessment
          </h1>
          <p className="text-gray-300">
            Complete all fields below for a comprehensive heart health evaluation
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(formData).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  type="number"
                  name={key}
                  value={formData[key]}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={handleReset}
            className="px-8 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Analyze Risk
          </button>
        </div>

        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white/10 backdrop-blur-md rounded-lg p-6 text-white border border-white/20"
          >
            <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>
            <p className="text-lg">{results}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default RiskAndSymptoms;
