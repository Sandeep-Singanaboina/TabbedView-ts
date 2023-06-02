import * as React from 'react';
import { useState } from 'react';
import { Autocomplete, TextField, Box } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'option1', label: 'Test 1' },
  { value: 'option2', label: 'Test 2' },
  { value: 'option3', label: 'Test 3' },
  // Add more options as needed
];

const MultiSelectList: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<{}>, value: Option[]) => {
    setSelectedOptions(value);
  };

  return (
    <Box display="flex" alignItems="center">
      <Box marginRight={1}>
        <label>Select Options:</label>
      </Box>
      <Box display="inline-block" width="600px" maxHeight="150px" overflow="auto">
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
              placeholder="Options"
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default MultiSelectList;
