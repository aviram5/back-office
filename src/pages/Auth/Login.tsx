import { Typography, Box, useTheme, Card } from "@mui/material";

const Login = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        elevation={2}
        sx={{
          minWidth: 300,
          width: "60%",
          height: "80%",
        }}
      >
        <Typography>test</Typography>
      </Card>
    </Box>
  );
};

export default Login;
