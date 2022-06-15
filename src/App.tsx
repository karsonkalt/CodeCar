import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Level1 } from "./levels/Level1";
import { Level2 } from "./levels/Level2";
import { Level3 } from "./levels/Level3";
import { Level4 } from "./levels/Level4";
import { Level5 } from "./levels/Level5";
import { Level6 } from "./levels/Level6";
import { Level7 } from "./levels/Level7";
import { Level8 } from "./levels/Level8";
import { Level9 } from "./levels/Level9";
import { Level10 } from "./levels/Level10";
import { Hearts } from "./components/Hearts";

export const App = () => {

  const [level, setLevel] = useState(7);
  const [currentHearts, setCurrentHearts] = useState(4)
  const [totalHearts, setTotalHearts] = useState(5);

  const increaseLevel = () => {
    setLevel(level + 1);
  }

  const decreaseHealth = () => {
    setCurrentHearts(currentHearts - 1);
  }

  const styles = {
    root: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
    },
  };
  
  return (
    <Box component="div" sx={styles.root}>
      <Typography variant="h3">Code Car</Typography>
      <Hearts current={currentHearts} total={totalHearts}/>
      {level === 1 && <Level1 onWin={increaseLevel}/>}
      {level === 2 && <Level2 onWin={increaseLevel} onInjury={decreaseHealth}/>}
      {level === 3 && <Level3 onWin={increaseLevel}/>}
      {level === 4 && <Level4 onWin={increaseLevel}/>}
      {level === 5 && <Level5 onWin={increaseLevel}/>}
      {level === 6 && <Level6 onWin={increaseLevel}/>}
      {level === 7 && <Level7 onWin={increaseLevel}/>}
      {level === 8 && <Level8 onWin={increaseLevel}/>}
      {level === 9 && <Level9 onWin={increaseLevel}/>}
      {level === 10 && <Level10 onWin={increaseLevel}/>}
    </Box>
  );
};
