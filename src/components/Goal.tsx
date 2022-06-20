import { Box } from '@mui/material';

const { min } = Math;

interface CarProps {
  x: number;
  y: number;
  blockSize: number;
}

export const Goal = ({ x, y, blockSize }: CarProps) => {
  const styles = {
    root: {
      background: 'green',
      width: blockSize,
      height: blockSize,
    },
  };

  return (
    <Box
      component="div"
      sx={styles.root}
      style={{ gridColumn: x, gridRow: y}}
    />
  );
};

export default Goal;
