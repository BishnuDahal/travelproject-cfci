import React, {useState, useEffect} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';


export default function Search() {
    const [open, setOpen] =useState(false);
  const [options, setOptions] =useState([]);
  const loading = open && options.length === 0;
  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
      //  await sleep(1e3); // For demo purposes.
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
    return (
        <div>
          <label>Search Country/Place</label><br/><br/>
<Autocomplete
      id="asynchronous-demo"
      open={open}
      fullWidth  
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          variant="outlined"
          // label="Search"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress size={20} style={{color: "#f6a82f"}} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className="IconElement" />
              </InputAdornment>
            ),
          }}
          
        />
      )}
    />
        </div>
    )
}
