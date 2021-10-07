import { map, } from 'lodash/fp';
import listings from '../data.json';


export const transformJobListings = map(listing => {
  return {
    ...listing,
    attributes: [
      listing.role,
      listing.level,
      ...listing.languages,
      ...listing.tools
    ],
  };
});

export const getJobListings = () => transformJobListings(listings);

export default getJobListings;