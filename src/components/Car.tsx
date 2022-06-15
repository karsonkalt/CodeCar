import { Box } from '@mui/material';

interface CarProps {
  x: number;
  y: number;
  blockSize: number;
}

const Car = ({ x, y, blockSize }: CarProps) => {
  const styles = {
    root: {
      background: '#1976d2',
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

export default Car;
