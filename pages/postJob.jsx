import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const experience = [
  'Entry Level',
  'Mid Level',
  'Senior Level',
  'Executive Level'
];

const employment = [
  'Full-Time',
  'Part-Time',
  'Temporary',
  'Internship',
  'Contract'
];

function getExperienceStyles(exp, experienceType, theme) {
  return {
    fontWeight:
      experienceType.indexOf(exp) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getEmploymentStyles(emp, employmentType, theme) {
  return {
    fontWeight:
      employmentType.indexOf(emp) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const PostJob = () => {
  const theme = useTheme();
  const [experienceType, setExperienceType] = useState([]);
  const [employmentType, setEmploymentType] = useState([]);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleLocationChange = (e) => {
    const loc = e.target.value;
    setLocation(loc);

    if (!loc.match(/^[A-Za-z\s]+,\s[A-Za-z]{2},\s\d{5}$/)) {
      setError('Please enter a valid location in the format "City, State, Zip"');
    } else {
      setError('');
    }
  }

  const handleExpChange = (e) => {
    const {
      target: { value },
    } = e;
    setExperienceType(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleEmpChange = (e) => {
    const {
      target: { value },
    } = e;
    setEmploymentType(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    let title = e.target.elements.title.value;
    let numberPositions = e.target.elements.numberPositions.value;
    let closeDate = e.target.elements.closeDate.value;
    let jobDescription = e.target.elements.jobDescription.value;
    let salary = e.target.elements.salary.value;

    console.log('title', title)
    console.log('numPos', numberPositions)
    console.log('closeDate', closeDate)
    console.log('jobDescription', jobDescription)
    console.log('salary', salary)
    console.log('location', location)
    console.log('exp type', experienceType)
    console.log('emp type', employmentType)
  }

  return (
    <>
    <div>
      <h1>Header</h1>
    </div>
    <Container
      sx={{border:'1px solid grey'}}
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, minwidth: '35vw' }, border:'1px solid grey',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        Post Job
        <div>
          <TextField
            sx={{minWidth:'35vw'}}
            required
            id="title"
            label="Title"
          />
        </div>
        <div>
          <TextField
            sx={{minWidth:'35vw'}}
            required
            id="numberPositions"
            label="Number of Positions"
            type="number"
          />
        </div>
        <div>
          <TextField
            sx={{minWidth:'35vw'}}
            required
            id="closeDate"
            label="Close Date"
            InputLabelProps={{
              shrink: true,
            }}
            type='date'
          />
        </div>
        <div>
          <TextField
            sx={{minWidth:'35vw'}}
            required
            multiline
            id="jobDescription"
            label="Job Description"
            rows={6}
          />
        </div>
        <div>
          <FormControl sx={{m:1, minWidth:'35vw'}}>
            <InputLabel htmlFor="salaryLabel" required>Salary</InputLabel>
            <OutlinedInput
              id="salary"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="Amount"
              type='number'
            />
          </FormControl>
        </div>
        <div>
          <TextField
            sx={{minWidth:'35vw'}}
            required
            id="location"
            label="Location (City, State, Zip)"
            value={location}
            onChange={handleLocationChange}
            error={error !== ''}
            helperText={error}
          />
        </div>
        <div>
          <Box sx={{display:'flex', justifyContent:'space-between', minWidth:'35vw', m:1}}>
            <Button id='remote' value='remote' variant="contained">Remote</Button>
            <Button id='onsite' value='onsite' variant="contained">Onsite</Button>
            <Button id='hybrid' value='hybrid' variant="contained">Hybrid</Button>
          </Box>
        </div>
        <div>
          <FormControl sx={{m:1, minWidth:'35vw'}}>
            <InputLabel id="demo-multiple-name-label" required>Experience</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={experienceType}
                onChange={handleExpChange}
                input={<OutlinedInput label="Experience" />}
                MenuProps={MenuProps}
              >
                {experience.map((exp) => (
                  <MenuItem
                    key={exp}
                    value={exp}
                    style={getExperienceStyles(exp, experienceType, theme)}
                  >
                    {exp}
                  </MenuItem>
                ))}
              </Select>
          </FormControl>
        </div>
        <div>
        <FormControl sx={{m:1, minWidth:'35vw'}}>
          <InputLabel id="demo-multiple-name-label" required>Employment Type</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={employmentType}
              onChange={handleEmpChange}
              input={<OutlinedInput label="Employment Type" />}
              MenuProps={MenuProps}
            >
              {employment.map((emp) => (
                <MenuItem
                  key={emp}
                  value={emp}
                  style={getEmploymentStyles(emp, employmentType, theme)}
                >
                  {emp}
                </MenuItem>
              ))}
            </Select>
        </FormControl>
        </div>
        <div>
          <Button type='submit' variant="contained" sx={{mt: 1}}>Submit</Button>
        </div>
      </Box>
    </Container>
    </>
  )
}

export default PostJob;