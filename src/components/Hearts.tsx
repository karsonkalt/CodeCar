import { Box, Card, Typography } from '@mui/material';

interface HeartProps {
  current: number;
  total: number;
}

export const Hearts = ({ current, total }: HeartProps) => {
  const styles = {
    root: {
      border: '1px solid #bdbdbd',
      padding: 2,
      width: 'auto',
    },
    heartContainer: {
      display: 'grid',
      gridTemplateColumns: `repeat(${total}, auto)`,
    },
    empty: {
      backgroundColor: '#f5f5f5',
      borderRadius: '50%',
      width: 30,
      height: 30,
      clipPath:
        'path("M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z")',
    },
    full: {
      backgroundColor: '#ff0000',
      width: 30,
      height: 30,
      clipPath:
        'path("M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z")',
    },
  };
  return (
    <Card sx={styles.root}>
      <Typography variant="h6">Hearts</Typography>
      <Box sx={styles.heartContainer}>
        {new Array(total).fill('').map((_, i) => {
          if (i + 1 <= current) {
            return <Box key={i} sx={styles.full} />;
          }
          return <Box key={i} sx={styles.empty} />;
        })}
      </Box>
    </Card>
  );
};
