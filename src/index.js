import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';



import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from '@mui/material';


const theme=createTheme({
  palette:{
  mode:'light'
    
  
  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}> 
    <BrowserRouter> 
   <Provider store={store}> 
   <PersistGate persistor={persistor}> 
   <Paper sx={{height:'100%'}}> 
    <App />
     </Paper>
    </PersistGate>
    </Provider>
    </BrowserRouter>
   </ThemeProvider>
  // </React.StrictMode>
);


