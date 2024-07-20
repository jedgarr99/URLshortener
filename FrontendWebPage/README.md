# URL Shortener Frontend

This project is a frontend application for a URL Shortener service built using React and Bootstrap. It allows users to shorten URLs and view shortened URLs.

## Features

- **Shorten URLs**: Input a URL to shorten it.
- **View Shortened URLs**: Display the list of shortened URLs and their corresponding original URLs.
- **Copy Shortened URLs**: Easily copy the shortened URL to the clipboard.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm (v6+)

### Installation

1. **Clone the repository** (or download the source code):

    ```sh
    git clone <your-repo-url>
    cd <your-repo-directory>
    ```

2. **Install the dependencies**:

    ```sh
    npm install
    ```

### Configuration

- **API Endpoint**: Ensure the API endpoint in your application matches the backend server URL. You can set this in your environment variables or directly in the code where the API calls are made.

### Running the Application

1. **Start the development server**:

    ```sh
    npm start
    ```

    The application will start on `http://localhost:3000`.

### Customization

- **Styling**: Customize the styling in `App.css` or create additional CSS files as needed.
- **Components**: Add or modify components in the `src/components` directory.

### Deployment

You can deploy the React application to various platforms, including Vercel, Netlify, AWS S3, or any other static site hosting provider. Below is a brief overview of deploying to Vercel:

1. **Install Vercel CLI**:

    ```sh
    npm install -g vercel
    ```

2. **Deploy the application**:

    ```sh
    vercel
    ```

3. Follow the prompts to complete the deployment.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- React
- Bootstrap
- Axios

Feel free to contribute to this project by submitting issues or pull requests.
