// import './App.css';
import { Box } from '@mui/system';
import JobListings from './pages/job-listings';



function App() {
  return (
    <Box>
      <Box sx={{
        backgroundImage: "url('/images/bg-header-desktop.svg')",
        backgroundColor: 'hsl(180deg 52% 68%)',
        minHeight: 150,
        width: '100%',
        display: 'block',
        marginBottom: 12,
      }}>
      </Box>
      <JobListings />
    </Box>
  );
}

export default App;
