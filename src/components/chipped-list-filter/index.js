import { Chip } from "@mui/material";
import { Box } from "@mui/system"

const ChippedListFilter = () => {
  return (
    <Box sx={{
      position: 'absolute',
      top: '130px',
      width: '100%',
      minHeight: '40px',
      margin: '0 auto 0 auto',
      maxWidth: '1200px',
      }}>
        <Chip>Hello</Chip>
      </Box>
  )
};

export default ChippedListFilter;