import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen">
      <Home />
    </div>
  );
}

export default App;

// npx create-react-app my-project
// npm install sass
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
// o file tailwind.config.js: content: ["./src/**/*.{js,jsx,ts,tsx}",]
// o file index.css @tailwind base; @tailwind components; @tailwind utilities;
