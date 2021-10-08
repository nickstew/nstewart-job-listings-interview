import React from 'react';
import { useReducer } from 'react';
import { Container, Stack } from '@mui/material';
import { map, xor } from 'lodash/fp';
import { filter, every, includes } from 'lodash';
import getJobListings from '../../api-actions/jobs';

import JobListing from '../../components/job-listing';
import ChippedListFilter from '../../components/chipped-list-filter';

const UPDATE_LISTINGS = 'UPDATE_LISTINGS';
const TOGGLE_FILTER = 'TOGGLE_FILTER';


   const filterJobs = jobs => filtersActive => {
     if(filtersActive.length === 0) {
       return jobs;
     }
     return filter(jobs, ({ attributes }) =>
      every(filtersActive, filter =>
        includes(attributes, filter)
      )
    );
   };

const initialFiltersActive = [];

const init = () => ({
  filtersActive: initialFiltersActive,
  visibleJobs: getJobListings()
});

// TODO: Testing
const filterReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FILTER: {
      const filtersActive = xor(state.filtersActive, [action.payload]);
      return {
        filtersActive,
        visibleJobs: filterJobs(state.visibleJobs)(filtersActive),
      };
    }
    case UPDATE_LISTINGS:
      return {
        ...state,
        visibleJobs: filterJobs(action.payload)(state.filtersActive)
      };
      case 'reset':
        return init(action.payload);
      default:
        return state;
  }
};


const toggleFilterDispatcher = dispatch => filter => (
  dispatch({
    type: TOGGLE_FILTER,
    payload: filter
  })
);

// TODO: dispatch({ action: UPDATE_LISTINGS, payload: getJobListings() });


export const JobListings = () => {
  const [state, dispatch] = useReducer(filterReducer, undefined, init);
  const onToggleFilter = toggleFilterDispatcher(dispatch);

  return (
    <Container className="job-listings"
      sx={{
        display: 'flex'
      }}
    >
      <ChippedListFilter />

      <Stack spacing={2}>
        {map(listing => (
          <JobListing
            listing={listing}
            filtersActive={state.filtersActive}
            onToggleFilter={onToggleFilter}
          />
        ))(state.visibleJobs)}
      </Stack>
    </Container>
  );
};

export default JobListings;
