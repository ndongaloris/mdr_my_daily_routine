# My Daily Routine Planner 📅

A mobile app built with **React Native** and **Expo Router** to help users plan, track, and reflect on their daily routines. This project was developed as part of the CSE 310 Applied Programming course.

## 📽️ Demo Video
[Insert your video link here]

## 📱 Features

- 🏠 **Home Dashboard**: Personalized greeting, motivational quote, and quick access to planner, profile, and routine creation.
- 📅 **Planner View**: Interactive calendar with task filtering by status (All, Completed, Pending).
- ➕ **Add Routine**: Input new tasks with time-of-day categorization and checkbox tracking.
- 👤 **Profile Page**: Displays user info, task streak, completion rate, and preferences.
- 🎨 **Themed UI**: Gradient backgrounds and dark mode-ready layout via `ThemedView`.

## 🧱 Tech Stack

- **React Native** (Expo)
- **Expo Router** for navigation
- **Ionicons** for icons
- **react-native-calendars** for calendar integration
- **expo-checkbox** for task completion tracking
- **react-native-element-dropdown** for time-of-day selection

## 📂 Project Structure
- app/ ├── index.jsx # Landing screen ├── (dashboard)/_layout.jsx
- Tab navigation layout ├── (dashboard)/home.jsx
- Home dashboard ├── (dashboard)/planner.jsx
- Calendar and task list ├── (dashboard)/add.jsx
- Add new routine ├── (dashboard)/profile.jsx
- User profile and settings components/ └── ThemedView.jsx
- Gradient background wrapper constants/ └── colors.js
- Theme color definitions assets/ └── SB My Daily Routine.png
- App banner image
- 
## 🧪 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mdr_my_daily_routine.git
   cd mdr_my_daily_routine
Install dependencies:

   ```bash
npm install
Start the app:

   ```bash
npx expo start



