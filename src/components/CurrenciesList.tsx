import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import React, {FC} from 'react';

interface ICurrenciesListProps {
  currenciesList: string[];
  title: string;
  currency: string;
  onChangeCurrency: (arg: SelectChangeEvent<string>) => void;
}
export const CurrenciesList: FC<ICurrenciesListProps> = ({currenciesList, title, currency, onChangeCurrency}) => {
  return (
    <FormControl fullWidth sx={{my: 2}}>
      <InputLabel id="from-currency-label">{title}</InputLabel>
      <Select labelId="from-currency-label" id="from-currency" value={currency} onChange={onChangeCurrency}>
        {currenciesList.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
