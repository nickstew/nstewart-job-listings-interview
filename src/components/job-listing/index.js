import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { includes } from 'lodash';
import { map } from 'lodash/fp';
import PropTypes from 'prop-types';


const filterRenderer = ({ filtersActive, onToggleFilter }) => map(filter => (
  <Button
    variant='contained'
    onClick={() => onToggleFilter(filter)}
    color={includes(filtersActive, filter) ? 'primary' : 'secondary'}
  >
    {filter}
  </Button>
));

const JobListing = ({
  listing: {
  id,
  company,
  logo,
  new: isNew,
  featured: isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  },
  filtersActive,
  onToggleFilter,
}) => {
  const connectedFilterRenderer = filterRenderer({filtersActive, onToggleFilter })
  return (
    <Paper elevation={4}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr 1fr',
          gap: 1,
          gridTemplateRows: '1fr 1fr 1fr',
          gridTemplateAreas: `"logo company ."
          "logo position filters"
          "logo details ."`,
        }}
      >
        <Box
          sx={{
            gridArea: 'logo',
            alignSelf: 'center',
            margin: 'auto'
          }}
        >
          <img src={logo} />
        </Box>
        <Box
          sx={{
            alignSelf: 'center',
            gridArea: 'company',
            margin: 'auto'
          }}
        >
          <Box component='span'>{company}</Box>
        </Box>
        <Box
          sx={{
            alignSelf: 'center',
            gridArea: 'position',
            margin: 'auto'
          }}
        >
          <Box component='span'>{position}</Box>
        </Box>
        <Box
          sx={{
            alignSelf: 'center',
            gridArea: 'details',
            margin: 'auto'
          }}
        >
          <Box 
            sx={{
              display: 'grid',
              gap: 1,
              gridTemplateColumns: 'repeat(3, 1fr)'
            }}
          >
            <Box component='span'>{postedAt}</Box>
            <Box component='span'>{position}</Box>
            <Box component='span'>{location}</Box>
          </Box>
        </Box>
        <Box
          sx={{
            gridArea: 'filters',
          }}
        >
          {/* Filters include: role, level, languages, & tools */}
          {connectedFilterRenderer([role, level, ...languages, ...tools])}
        </Box>
      </Box>
    </Paper>
  );
};

JobListing.propTypes = {
  listing: PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    logo: PropTypes.string,
    new: PropTypes.bool.isRequired,
    featured: PropTypes.bool.isRequired,
    position: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  filtersActive: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleFilter: PropTypes.func.isRequired,
};


export default JobListing;