import { Box } from '@mui/material';

const { min } = Math;

interface CarProps {
  x: number;
  y: number;
  blockSize: number;
}

export const Hazard = ({ x, y, blockSize }: CarProps) => {
  const styles = {
    root: {
      background: 'red',
      width: blockSize,
      height: blockSize,
      zIndex: 1,
      borderRadius: '50%',
      boxShadow: '0px 2px 2px 0px #c9c9c9;'
    },
  };

  return (
    <Box
      component="div"
      sx={styles.root}
      style={{ gridColumn: x, gridRow: y }}
    />
  );
};
