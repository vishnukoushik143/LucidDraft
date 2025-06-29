### Working with .env file

- Use this in scripts "dev": "nodemon --env-file=.env server.js"
- This will preload .env, and dotenv library is not required

### Problem with Importing Modules

- use "type" = "module" in package.json
- Import modules with File extensions

### Password Hashing

- **bcrypt** library was used to hash passwords

### Authentication

- httpOnly tokens with JWT was used
