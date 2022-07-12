import { Outlet } from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ x: 1040, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1040, opacity: 0 }}>
      <Menu />
      
      <Outlet />
    </motion.div>
  );
}

export default App;
