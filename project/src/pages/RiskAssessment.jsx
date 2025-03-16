import { useState } from 'react';
import { motion } from 'framer-motion';
import RiskHeader from '../components/risk/RiskHeader';

function RiskAssessment() {
  const [formData, setFormData] = useState({
    age: '',
    diabetesDuration: '',
    bloodSugar: '',
    bloodPressure: '',
    lastEyeExam: ''
  });
  const [riskResult, setRiskResult] = useState(null);

  // Background animation configuration
  const backgroundElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    initialX: Math.random() * window.innerWidth,
    initialY: Math.random() * window.innerHeight,
  }));

  const calculateRiskLevel = (age, duration) => {
    if (duration >= 10 || age >= 60) return 'high';
    if (duration >= 5 || age >= 45) return 'moderate';
    return 'low';
  };

  const getRecommendations = (riskLevel) => {
    const recommendations = {
      high: [
        "Schedule immediate comprehensive eye examination",
        "Monitor blood sugar levels multiple times daily",
        "Maintain A1C levels below 7%",
        "Check blood pressure daily, target below 130/80",
        "Follow a strict low-glycemic diet",
        "Exercise moderately for 30 minutes, 5 times a week",
        "Take prescribed medications regularly",
        "Consider laser therapy or anti-VEGF treatment options",
        "Join support groups for diabetes management",
        "Use protective eyewear in bright conditions"
      ],
      moderate: [
        "Schedule eye examination every 6 months",
        "Monitor blood sugar levels daily",
        "Maintain A1C levels below 7.5%",
        "Regular blood pressure checks",
        "Follow a balanced diabetic diet",
        "Regular physical activity",
        "Consider vitamin supplements for eye health",
        "Reduce screen time and practice eye exercises",
        "Stay hydrated with 8 glasses of water daily",
        "Avoid smoking and limit alcohol intake"
      ],
      low: [
        "Annual eye examination recommended",
        "Monitor blood sugar levels regularly",
        "Maintain healthy diet rich in antioxidants",
        "Regular exercise routine",
        "Learn about early warning signs",
        "Practice good sleep hygiene",
        "Protect eyes from UV exposure",
        "Stay updated with diabetes education",
        "Practice stress management techniques",
        "Regular health check-ups"
      ]
    };
    return recommendations[riskLevel];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const riskLevel = calculateRiskLevel(parseInt(formData.age), parseInt(formData.diabetesDuration));
    const recommendations = getRecommendations(riskLevel);
    setRiskResult({ level: riskLevel, recommendations });
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-900 to-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      {backgroundElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-white/5 backdrop-blur-sm"
          style={{
            width: element.size,
            height: element.size,
          }}
          initial={{
            x: element.initialX,
            y: element.initialY,
            opacity: 0.3,
          }}
          animate={{
            x: [element.initialX, element.initialX + 100, element.initialX - 100, element.initialX],
            y: [element.initialY, element.initialY - 100, element.initialY + 100, element.initialY],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 relative z-10">
        <RiskHeader />

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white">Age</label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                placeholder="Enter your Age"
                className="mt-1 block w-full rounded-md bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Duration of Diabetes (years)
              </label>
              <input
                type="number"
                value={formData.diabetesDuration}
                onChange={(e) => setFormData({ ...formData, diabetesDuration: e.target.value })}
                placeholder="Enter Duration of Diabetes"
                className="mt-1 block w-full rounded-md bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Calculate Risk
            </button>
          </div>
        </motion.form>

        {riskResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20"
          >
            <div className={`mb-6 p-4 rounded-lg ${
              riskResult.level === 'high' ? 'bg-red-500/20 text-red-100' :
              riskResult.level === 'moderate' ? 'bg-yellow-500/20 text-yellow-100' :
              'bg-green-500/20 text-green-100'
            }`}>
              <h2 className="text-xl font-semibold mb-2">Risk Level: {riskResult.level.toUpperCase()}</h2>
              <p>Based on your age and diabetes duration, here are personalized recommendations:</p>
            </div>

            <div className="space-y-4">
              {riskResult.recommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-100 flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-white/90">{rec}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default RiskAssessment;