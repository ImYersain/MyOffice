import React, {ChangeEvent, useState} from 'react';
import {CurrenciesList} from './CurrenciesList';
import {useTranslation} from 'react-i18next';
import {normalizeDate} from '../utils/format';
import {useFetch} from '../hooks/useFetch';

import {
  Container,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button,
  SelectChangeEvent,
} from '@mui/material';

const currencies = ['USD', 'EUR', 'CZK', 'KZT', 'RUB', 'GBP'];

export const CurrencyConverter = () => {
  const {t} = useTranslation();
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('CZK');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');
  const [currencyRate, setCurrencyRate] = useState('');
  const [lastUpdate, setlastUpdate] = useState('');
  const {loading, error, fetchData} = useFetch();

  const handleFromCurrencyChange = (event: SelectChangeEvent<string>) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event: SelectChangeEvent<string>) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!event.target.value.includes('-')) {
      setAmount(event.target.value);
    }
  };

  const handleConvert = async () => {
    const response = await fetchData(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
    if (response) {
      setResult(response.conversion_result);
      setCurrencyRate(response.conversion_rate);
      setlastUpdate(response.time_last_update_utc);
    }
  };

  return (
    <Container sx={{p: 3}}>
      <CurrenciesList
        currenciesList={currencies}
        title={t('converter.CurrencyFrom')}
        currency={fromCurrency}
        onChangeCurrency={handleFromCurrencyChange}
      />
      <CurrenciesList
        currenciesList={currencies}
        title={t('converter.CurrencyTO')}
        currency={toCurrency}
        onChangeCurrency={handleToCurrencyChange}
      />
      <FormControl fullWidth sx={{my: 2}}>
        <InputLabel htmlFor="amount-input" error={!amount} required>
          {t('converter.Amount')}
        </InputLabel>
        <Input
          id={'amount-input'}
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder={t('converter.EnterAmount')}
          error={!amount}
        />
      </FormControl>
      <Button variant="contained" onClick={() => handleConvert()} disabled={!amount} sx={{my: 2}}>
        {t('convert.ButtonName')}
      </Button>
      {loading && (
        <Typography color="green" variant="h6">
          {t('converter.loading')}
        </Typography>
      )}
      {error && (
        <Typography color="red" variant="h6">
          {t('converter.error')}
        </Typography>
      )}
      {result && !loading && !error && (
        <Typography color="black" variant="h6">
          {t('convert.rate')} <span style={{color: 'green'}}>{currencyRate}</span> <br />
          {t('convert.result')}{' '}
          <span style={{color: 'green'}}>
            {result} {toCurrency}
          </span>{' '}
          <br />
          {t('convert.update')} <span style={{color: 'green'}}>{normalizeDate(lastUpdate)}</span>
        </Typography>
      )}
    </Container>
  );
};
