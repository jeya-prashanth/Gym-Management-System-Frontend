# Gym Management System

A comprehensive web application for managing gym memberships, schedules, and gym operations. This system provides different interfaces for administrators, gym staff, and members to manage their respective activities.

## Features

### Admin Features
- Manage gyms (Create, Edit, View)
- Manage members
- View system analytics
- Manage gym schedules

### Gym Staff Features
- View and manage member check-ins
- Manage class schedules
- View gym statistics

### Member Features
- View and update profile
- View membership plans
- Check visit history
- View and book classes

## Tech Stack

- **Frontend**: 
  - React.js
  - Vite
  - Tailwind CSS
  - React Router

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd GYM_Management_System/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Project Structure

```
frontend/
├── src/
│   ├── assets/           # Static assets (images, fonts, etc.)
│   ├── components/       # Reusable UI components
│   ├── contexts/         # React context providers
│   ├── layouts/          # Layout components for different user roles
│   ├── pages/            # Page components
│   │   ├── admin/        # Admin-specific pages
│   │   ├── gym/          # Gym staff-specific pages
│   │   └── ...           # Common pages
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
└── public/               # Static files
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any queries, please contact [Your Email] or open an issue in the repository.
