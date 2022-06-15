import { Box, Card } from '@mui/material';

interface FieldProps {
  width: number;
  height: number;
  blockSize: number;
  children: React.ReactNode;
}

export const Field = ({ width, height, children, blockSize }: FieldProps) => {
  const styles = {
    root: {
      border: '1px solid #bdbdbd',
      borderRadius: 3,
      display: 'grid',
      gridTemplateColumns: `repeat(${width}, ${blockSize}px)`,
      gridTemplateRows: `repeat(${height}, ${blockSize}px)`,
      padding: 2,
    },
  };
  return (
    <Card sx={styles.root}>
      {children}
    </Card>
  );
};
