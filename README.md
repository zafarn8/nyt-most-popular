# **NY Times Most Popular Articles App**

A React-based web application that fetches and displays the most popular articles from the NY Times API. This project includes a simple master/detail view of articles, built using modern JavaScript and React best practices.

## **Features**
- Fetch and display the most popular articles.
- Navigate to a detailed view of a selected article.
- Error handling for API requests.
- Unit testing with Jest and React Testing Library.
- End-to-end testing with Cypress.
- Code linting and coverage reports.

## **Getting Started**

Follow these instructions to set up the project locally.

### **Prerequisites**
- **Node.js** (v18 or later recommended)
- **npm** (comes with Node.js) or **yarn**

### **1. Clone the Repository**
```bash
git clone https://github.com/zafarn8/nyt-most-popular.git
cd nyt-most-popular
```

### **2. Install Dependencies**
```bash
npm install
```

## **Environment Variables**

Create a `.env` file in the root directory with the following:
```env
REACT_APP_NYT_API_KEY=your-nyt-api-key
```

Replace `your-nyt-api-key` with your actual API key from [NY Times Developer Portal](https://developer.nytimes.com/get-started).

## **Run the Application**

To start the development server:
```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

## **Run Tests**

### **1. Unit Tests**
Run unit tests with Jest:
```bash
npm test
```

To generate a test coverage report:
```bash
npm test -- --coverage
```

The coverage report will be available in the `coverage/` directory.


### **2. End-to-End Tests**
Run Cypress tests:
```bash
npx cypress open
```

This will open the Cypress Test Runner. Select a test to execute.

For headless test execution:
```bash
npx cypress run
```


## **Linting and Code Quality**

### **1. Lint Code**
Lint your code using ESLint:
```bash
npm run lint
```

### **2. Fix Linting Issues**
Automatically fix linting issues:
```bash
npm run lint:fix
```


## **Build the Project**

To create an optimized production build:
```bash
npm run build
```

The production-ready files will be in the `build/` directory.


## **Scripts Summary**

| Script                 | Description                                      |
|------------------------|--------------------------------------------------|
| `npm start`            | Run the development server.                     |
| `npm test`             | Run unit tests with Jest.                       |
| `npm test -- --coverage` | Generate a code coverage report.               |
| `npx cypress open`     | Open Cypress Test Runner for end-to-end tests.  |
| `npx cypress run`      | Run Cypress tests in headless mode.             |
| `npm run lint`         | Lint the project files with ESLint.             |
| `npm run lint:fix`     | Fix linting issues automatically.               |
| `npm run build`        | Build the project for production.               |


## **Project Structure**

```
src/
├── components/          # Reusable React components
├── pages/               # Page-level components
├── App.js               # Main app component
├── index.js             # App entry point
cypress/
├── e2e/                 # End-to-end test files
public/                  # Static files
```


## **Code Quality Tools**
- **ESLint**: Enforces code quality and consistency.
- **Prettier**: Automatically formats code.


## **SonarQube Integration** (Optional)
1. Install SonarQube locally or connect to an existing SonarQube instance.
2. Run the following command to generate a SonarQube report:
   ```bash
   sonar-scanner
   ```

## **Author**
Developed by Zafar Najeed(https://github.com/zafarn8).

## **License**
This project is licensed under the MIT License.