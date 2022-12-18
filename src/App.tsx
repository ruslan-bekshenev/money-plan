import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import PlanItem from './pages/PlanItem';
import PlanList from './pages/PlanList';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const App = () => (
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<PlanList />}></Route>
					<Route path="/:id" element={<PlanItem />}></Route>
				</Routes>
			</Router>
		</div>
	</ThemeProvider>
);

export default App;
