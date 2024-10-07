
![curd](https://github.com/user-attachments/assets/616bea9f-113d-4134-a3ae-e8998091dea0){width=300px}


# CURD React App

A simple React application for performing CRUD (Create, Read, Update, Delete) operations. The app interacts with a mock backend using [JSON Server](https://github.com/typicode/json-server).

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Follow the steps below to set up the project on your local machine.

### Prerequisites

- Node.js installed on your machine
- `npm` or `yarn` package manager installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/domz-1/CURD.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CURD
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the JSON Server

To run the mock backend server using JSON Server:

1. Navigate to the project directory.
2. Run the following command to start the server:
   ```bash
   json-server --watch --port 5000 db/db.json
   ```

This starts the JSON server on port 5000, and it will monitor changes to the `db.json` file located in the `db` folder.

## Features

- **Create**: Add new items to the list.
- **Read**: View the list of items.
- **Update**: Edit existing items.
- **Delete**: Remove items from the list.

## File Structure

The project is organized into the following structure:

```
CURD/
├── db/                 # Folder containing the mock database (db.json)
├── public/             # Folder containing public assets like index.html
├── src/                # Folder containing the React app source code
│   ├── components/     # Reusable UI components
│   ├── containers/     # Main application containers (logic handling)
│   ├── actions/        # Redux action creators (for state management)
│   ├── reducers/       # Redux reducers (state handlers)
│   ├── App.js          # Main app component
│   └── index.js        # Entry point for the app
├── package.json        # Package configuration file
└── README.md           # Documentation file (this file)
```

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes, and linting errors will be shown in the console.

### `npm test`

Launches the test runner in interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for best performance.

The build is minified, and filenames include hashes for better cache management.

Your app will be ready to deploy!

### `npm run eject`

**Note**: This is a one-way operation. Once you eject, you can't go back!

This command removes the single build dependency from your project. All the configuration files and dependencies are copied directly into your project, giving you full control over the build.

## Learn More

To learn more about Create React App, check the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

You can also learn more about [React](https://reactjs.org/) by following the official React documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
