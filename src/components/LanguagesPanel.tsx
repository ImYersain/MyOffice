import React, {FC} from 'react';
import i18n from '../utils/i18n';

import {Box, Button} from '@mui/material';

export const LanguagesPanel: FC = () => {
  const langs = {
    gb: {nativeName: 'English'},
    cz: {nativeName: 'Czech'},
  };
  return (
    <Box display={'flex'} justifyContent={'flex-end'}>
      {Object.keys(langs).map((lng) => (
        <Button
          type="submit"
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
          variant="outlined"
        >
          {langs[lng].nativeName}
        </Button>
      ))}
    </Box>
  );
};
