# OptiPrompt

## Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your system
- (Optional) [Git](https://git-scm.com/) for cloning the repository

## Running the Project

1. **Clone the repository and enter the project directory:**
   ```sh
   git clone <repo-url>
   cd optiprompt
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your API keys and configuration as needed.
   ```sh
   cp .env.example .env
   ```

3. **Start the services using Docker Compose:**
   ```sh
   docker-compose up
   ```

   This will start:
   - The LiteLLM proxy on port `4000`
   - A PostgreSQL database on port `5432`

4. **Access the LiteLLM API:**
   - The API will be available at [http://localhost:4000](http://localhost:4000)
   - The UI will be available at [http://localhost:4000/ui](http://localhost:4000/ui)

## Configuration

- Edit [`litellm_config.yaml`](litellm_config.yaml) to configure models and API keys.
- Environment variables can be set in the [`.env`](.env) file.

## Stopping the Project

To stop the services, press `Ctrl+C` in the terminal and run:
```sh
docker-compose down
```