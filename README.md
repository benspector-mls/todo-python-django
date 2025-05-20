# Todo Application

A full-stack todo application built with React (TypeScript) frontend and Django/PostgreSQL backend.

## Project Structure

```
todo_python_project/
├── todo-frontend/     # React TypeScript frontend
├── todo_backend/      # Django backend
├── todos/            # Django todos app
├── venv/             # Python virtual environment
└── manage.py         # Django management script
```

## Prerequisites

- Python 3.x
- Node.js and npm
- PostgreSQL

## Backend Setup

1. Create and activate a virtual environment:
```bash
python -m venv venv # You may need to use python3 on MacOS
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:

    ```bash
    DEBUG=True
    SECRET_KEY=your-secret-key-here
    DB_NAME=todo_db
    DB_USER=your-db-username
    DB_PASSWORD=your-db-password
    DB_HOST=localhost
    DB_PORT=your-postgres-port-probably-5432
    ```

4. Configure PostgreSQL database:
- Make sure your PostgreSQL server is running on the port listed above
- Create a database named 'todo_db'

5. Run migrations:
```bash
python manage.py migrate
```

6. Create a superuser (optional):
```bash
python manage.py createsuperuser
```

7. Start the Django development server:
```bash
python manage.py runserver
```

The backend API will be available at `http://localhost:8000`

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## API Endpoints

- `GET /api/todos/` - List all todos
- `POST /api/todos/` - Create a new todo
- `GET /api/todos/{id}/` - Retrieve a specific todo
- `PUT /api/todos/{id}/` - Update a todo
- `DELETE /api/todos/{id}/` - Delete a todo

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Responsive design with Tailwind CSS
- TypeScript for type safety
- RESTful API architecture

## Technologies Used

### Frontend
- React
- TypeScript
- Tailwind CSS
- Vite

### Backend
- Django
- Django REST Framework
- PostgreSQL
- Python

## Development

- Django admin interface is available at `http://localhost:8000/admin/`

## License

MIT 