❤️ Heart Disease Prediction with Federated Learning and Explainable AI
This project is a secure and privacy-focused web application that predicts the likelihood of heart disease using Federated Learning (FL) and Explainable AI (XAI) techniques like SHAP and LIME. It integrates machine learning with a user-friendly web interface to assist healthcare professionals in making data-driven decisions without compromising patient privacy.

🚀 Features
🧠 Heart Disease Risk Prediction using ML algorithms like Random Forest and Logistic Regression

🔐 Federated Learning ensures data never leaves local clients

💬 Explainable AI (XAI) via SHAP & LIME for model interpretability

📊 Admin and User Modes with enhanced form-based risk input

🌐 Web App Interface for easy clinical usage

📝 Health Guide section for prevention tips

🧰 Tech Stack
Frontend: HTML, CSS, JavaScript

Backend: Python, Flask

ML Libraries: Scikit-learn, SHAP, LIME, PySyft, Flower

Deployment: Localhost or cloud (optional)

⚙️ Prerequisites
Python 3.8+

pip

Flask

Scikit-learn

SHAP, LIME

Flower and PySyft

Install dependencies:

bash
Copy
Edit
pip install -r requirements.txt
📦 Project Structure
csharp
Copy
Edit
HeartDiseasePrediction/
├── templates/                # HTML Templates
├── static/                   # CSS and JS Files
├── models/                   # ML Models
├── federated_server/         # Flower Server Script
├── clients/                  # Simulated Hospital Clients
├── explainability/           # SHAP, LIME implementation
├── app.py                    # Main Flask App
├── train_model.py            # ML Model Training
├── utils.py                  # Helper Functions
└── README.md                 # You’re reading it!
🧪 How to Run
1. Train the ML Model
bash
Copy
Edit
python train_model.py
2. Run Federated Server (Flower)
bash
Copy
Edit
python federated_server/server.py
3. Start Clients (Simulate Hospitals)
bash
Copy
Edit
python clients/client1.py
python clients/client2.py
4. Run Flask Web App
bash
Copy
Edit
python app.py
Visit: http://localhost:5000

📊 Usage Guide
Log in as Admin or User

Enter health parameters (e.g., age, cholesterol)

View heart disease risk prediction

Explore SHAP and LIME explainability graphs

Refer to Health Guide for tips

🔐 Privacy and Security
No raw data leaves local clients

Differential privacy supported via PySyft

Compliant with GDPR/HIPAA guidelines

📈 Future Scope
Cloud-based deployment with real-time hospital integration

Integration with wearable device data

Predict other diseases (diabetes, cancer) using the same FL-XAI pipeline

🙏 Acknowledgements
UCI Heart Disease Dataset

Flower Framework

SHAP & LIME Libraries

PySyft - Privacy-preserving ML
