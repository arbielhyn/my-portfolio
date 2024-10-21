# My Portfolio

This is a Portfolio that showcases me and some of my work.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Running the Application with Docker

### Prerequisites

- Docker must be installed on your machine. You can download and install Docker from [here](https://www.docker.com/products/docker-desktop).

### Building and Running the Docker Container

```bash
### Clone the repository
git clone https://github.com/arbielhyn/my-portfolio.git
cd my-portfolio

# Build the Docker image
docker build -t lacanlale_arbie_coding_assignment14 .

# Run the Docker container
docker run -d -p 5575:80 --name lacanlale_arbie_coding_assignment14 lacanlale_arbie_coding_assignment14

# Open your browser and navigate to
http://localhost:5575
```
