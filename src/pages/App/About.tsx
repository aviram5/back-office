import { Typography, Box, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { setCount } from "../../slices/userSlice";

const About = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.user.count);
  return (
    <Box>
      <Typography>Count: {count}</Typography>
      <Button
        onClick={() => {
          dispatch(setCount(1));
        }}
      >
        up count
      </Button>
    </Box>
  );
};

export default About;
