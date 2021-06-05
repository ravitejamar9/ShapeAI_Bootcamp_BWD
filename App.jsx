import "./styles.css";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Note />
      <Note />
      <Note />
    </div>
  );
}
