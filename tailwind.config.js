{
  "name": "your-project-name",
  "version": "1.0.0",
  "devDependencies": {
    "tailwindcss": "^4.2.2",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  },
  "scripts": {
    "build:css": "tailwindcss -i ./src/input.css -o ./src/output.css --minify"
  }
}