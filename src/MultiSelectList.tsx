import * as React from 'react';
import { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },

];

const MultiSelectList: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<{}>, value: Option[]) => {
    setSelectedOptions(value);
  };

  return (
    <Autocomplete
      multiple
      options={options}
      getOptionLabel={(option) => option.label}
      value={selectedOptions}
      onChange={handleSelectChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Select Options"
          placeholder="Options"
        />
      )}
    />
  );
};

export default MultiSelectList;
