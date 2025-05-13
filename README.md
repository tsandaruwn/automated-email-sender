# 📧 Automated Email Sender

> A modern email automation system built with Django and React.js

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- **📊 Dashboard Analytics** - Real-time email performance metrics
- **📝 Email Templates** - Create and manage reusable templates
- **⏰ Smart Scheduling** - Set custom intervals for email sending
- **📈 Email History** - Track delivery status and performance
- **👥 Recipient Management** - Organize email recipients effectively

## 🛠️ Tech Stack

- **Frontend:** React.js, Axios, React Router
- **Backend:** Django, Django REST Framework
- **Database:** SQLite/MongoDB
- **Email Service:** SMTP (Gmail)

## 📥 Installation

### Prerequisites
- Python 3.10+
- Node.js 14+
- npm/yarn

### Backend Setup
```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv env

# Activate environment
.\env\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
```

### Frontend Setup
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

## ⚙️ Configuration

Create `.env` file in backend directory:

```env
SECRET_KEY=your_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_app_password
```

## 📚 API Documentation

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/templates/` | List email templates |
| POST   | `/api/templates/` | Create template |
| GET    | `/api/schedules/` | List scheduled emails |
| POST   | `/api/schedules/` | Schedule new email |
| GET    | `/api/history/` | View email history |

## 💻 Usage

1. Create email templates with custom subjects and bodies
2. Schedule emails with specific intervals
3. Monitor email delivery status
4. Track performance metrics

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add YourFeature'`)
4. Push to branch (`git push origin feature/YourFeature`)
5. Open Pull Request

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👤 Author

- GitHub: Thilina Sandaruwan(https://github.com/tsandaruwan)
- LinkedIn: Thilina Sandaruwan(https://linkedin.com/in/YourProfile](https://www.linkedin.com/in/b-t-sandaruwan/))

---

⭐️ If you found this project helpful, give it a star!

Made with ❤️ by [Your Name]
