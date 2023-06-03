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
  { value: 'option4', label: 'Test 4' },
  { value: 'option5', label: 'Test 5' },
  { value: 'option6', label: 'Test 6' },
  { value: 'option7', label: 'Test 7' },
  { value: 'option8', label: 'Test 8' },
  { value: 'option9', label: 'Test 9' },
  { value: 'option10', label: 'Test 10' },
  { value: 'option11', label: 'Test 11' },
  { value: 'option12', label: 'Test 12' },
  { value: 'option13', label: 'Test 13' },
  { value: 'option14', label: 'Test 14' },
  { value: 'option15', label: 'Test 15' },
  { value: 'option16', label: 'Test 16' },
  { value: 'option17', label: 'Test 17' },
  { value: 'option18', label: 'Test 18' },



];

const MultiSelectList: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<{}>, value: Option[]) => {
    setSelectedOptions(value);
  };

  const textFieldStyle: React.CSSProperties = {
    maxHeight: '60px',
    maxWidth: '600px',
    overflow: 'auto',
    resize: 'none',
  };

  return (
    <Box display="flex" alignItems="center">
      <Box marginRight={1}>
        <label>Select Options:</label>
      </Box>
      <Box display="inline-block" width="600px">
        <Box style={textFieldStyle}>
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
    </Box>
  );
};

export default MultiSelectList;
