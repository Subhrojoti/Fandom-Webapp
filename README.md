# [Fandom WebApp]((https://climaxweb.netlify.app/)

Climax is a movie database platform inspired by IMDB. It allows users to browse, search, and view detailed information about movies. Users can also sign up, log in, and manage a watchlist of their favorite movies using Firebase for authentication. The application is built with React and Redux Toolkit, ensuring efficient state management and a seamless user experience.

## Features

1. **Frontend Interface Development**: A basic frontend interface inspired by popular movie database platforms, featuring movie listings, details, and ratings.
2. **User Authentication and Watchlist Management**: Integrates Firebase for user login, signup, and watchlist management, allowing users to save their favorite movies.
3. **Browse Movies Without Login/Signup**: Users can browse movies without needing to log in or sign up.
4. **Data Management with Redux**: Utilizes Redux Toolkit for efficient data management and smooth state handling across the application.
5. **Authentication Redirect**: Redirects users to the login/signup page when they attempt to add a movie to the watchlist without being logged in.
6. **Authentication Methods**: Implements Firebase authentication methods to ensure secure and reliable user authentication.
7. **UI/UX Design**: Uses Tailwind CSS for a visually appealing, user-friendly, and intuitive frontend design.
8. **Search Functionality**: Allows users to search for movies easily, enhancing user convenience and movie discovery.
9. **Thorough Testing**: Ensures all functionalities work as expected, providing a smooth and enjoyable movie browsing experience.
10. **Documentation and Deployment**: Detailed documentation of the development process, challenges faced, solutions implemented, and deployment instructions.

## Tech Stack

- **Frontend**: React, Tailwind CSS, SCSS
- **State Management**: Redux Toolkit
- **Authentication**: Firebase
- **Backend**: Firebase (Authentication and Firestore for data storage)
- **Other Libraries**: Axios (for API calls), React Router (for routing), Redux persist 
## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/climax.git
    cd climax
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up Firebase:

   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication and Firestore in your Firebase project.
   - Get your Firebase configuration details from your Firebase project settings and add them to a `.env` file in the root directory of your project.

   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id

## Running the App

Start the development server:

```bash
npm start
# or
yarn start
```

## Usage

- Browse movies without logging in.
- Sign up or log in to manage your watchlist.
- Search for movies using the search functionality.
- Add movies to your watchlist (redirects to login/signup if not authenticated).

## Deployment

Build the application:

```bash
npm run build
# or
yarn build
```
### Deploy the build files to your preferred hosting service.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Inspired by Fandom and popular movie database platforms.
- Built with React, Redux Toolkit, and Firebase.

## Contact

For any inquiries or feedback, please contact [Contact Me](subhrojoti20@gmail.com).
