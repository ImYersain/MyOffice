import React, {useState} from 'react';
import {CurrencyConverter} from './components/CurrencyConverter';
import {Calculator} from './components/Calculator';
import {useTranslation} from 'react-i18next';

import './App.scss';
import {Container, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {LanguagesPanel} from './components/LanguagesPanel';

function App() {
  const {t} = useTranslation();
  const [tabValue, setTabValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <div className="app-wrapper">
      <Container maxWidth="sm" className="app-container">
        <LanguagesPanel />
        <TabContext value={tabValue}>
          <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <TabList onChange={handleChange}>
              <Tab label={t('tabName.Converter')} value="1" />
              <Tab label={t('tabName.Calculator')} value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Typography variant="h4" color={'black'} align="center">
              {t('tabName.Converter')}
            </Typography>
            <CurrencyConverter />
          </TabPanel>
          <TabPanel value="2">
            <Typography variant="h4" color={'black'} align="center">
              {t('tabName.Calculator')}
            </Typography>
            <Calculator />
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
}

export default App;
