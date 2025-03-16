import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import heartBg from '../assets/a11.png';
import heartImage from '../assets/b1.png';

function PatientStories() {
  return (
    <div className="min-h-screen relative">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-red-50 to-red-100"
        style={{
          backgroundImage: `url(${heartBg})`,
          backgroundSize: '600px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          filter: 'blur(0.5px)',
          opacity: 0.05
        }}
      />

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Heart Disease XAi Analysis
          </h1>

          {/* Heart Logo with Effects */}
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-48 h-48"
            >
              <motion.div
                className="relative w-full h-full"
                animate={{
                  scale: [1, 1.05, 1],
                  filter: [
                    'drop-shadow(0 0 0px rgba(239, 68, 68, 0.5))',
                    'drop-shadow(0 0 4px rgba(239, 68, 68, 0.5))',
                    'drop-shadow(0 0 0px rgba(239, 68, 68, 0.5))'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={heartImage} 
                  alt="Heart Care"
                  className="w-full h-full object-contain"
                />
                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-red-500 -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.1, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* ECG Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-red-100"
        >
          <img 
            src="/src/assets/a111.jpg" 
            alt="Heart Disease Analysis"
            className="w-full rounded-xl shadow-lg mb-8"
          />
          
          <div className="text-gray-700 space-y-4">
            <p className="text-lg leading-relaxed">
              This visualization represents our comprehensive heart disease analysis using advanced machine learning techniques. 
              The model takes into account various factors and provides insights into heart disease risk assessment.
            </p>
            
            {/* Analysis Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 p-6 rounded-xl shadow-md border border-red-100"
              >
                <h3 className="text-xl font-semibold text-red-600 mb-4">SHAP Analysis with Logistic Regression</h3>
                <p className="text-gray-600">
                  SHAP (SHapley Additive exPlanations) values show how each feature contributes to the model's prediction. 
                  In our analysis, key factors like chest pain type, maximum heart rate, and number of vessels have significant 
                  impact on heart disease prediction. The red and blue regions in the SHAP plot indicate positive and negative 
                  contributions respectively, helping identify which factors increase or decrease the risk of heart disease.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 p-6 rounded-xl shadow-md border border-red-100"
              >
                <h3 className="text-xl font-semibold text-red-600 mb-4">LIME Analysis Insights</h3>
                <p className="text-gray-600">
                  LIME (Local Interpretable Model-agnostic Explanations) provides detailed explanations for individual predictions. 
                  Our analysis reveals how different features interact to influence the final prediction. The visualization shows 
                  the local behavior of the model, highlighting which features were most important for specific cases and how 
                  they contributed to the prediction, making the model's decisions more transparent and interpretable.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PatientStories;