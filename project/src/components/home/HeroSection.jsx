import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <div className="relative bg-[#FF3131] text-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            PREDICTING HEART DISEASE
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
         Empowering a healthier tomorrow, today, we're dedicated to providing cutting-edge technology, and expert guidance to enable early detection and prevention, saving lives and guiding you towards a stronger, healthier heart - because every beat matters.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;