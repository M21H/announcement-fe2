import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			{/* <Provider> */}
				<App />
			{/* </Provider> */}
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)