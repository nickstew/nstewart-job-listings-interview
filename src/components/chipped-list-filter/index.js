import { Chip } from "@mui/material";
import { Box } from "@mui/system"

const ChippedListFilter = ({filters, onToggleFilter}) => {
  return (
    <Box sx={{
      position: 'absolute',
      top: '130px',
      width: '100%',
      minHeight: '40px',
      margin: '0 auto 0 auto',
      maxWidth: '1200px',
      }}>
      {filters.map(filter => (
        <Chip
          onDelete={() => onToggleFilter(filter)}
          onClick={() => onToggleFilter(filter)}
          label={filter}
        />
      ))}
        <Chip label={}></Chip>
      </Box>
  )
};

export default ChippedListFilter;
