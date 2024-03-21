import { useTheme } from "@emotion/react";
import { Close } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { RotateLoader } from "react-spinners";

const SearchProfile = ({ setSearchState, searchContent }) => {
  const Theme = useTheme();
  const [loadingState, setLoadingstate] = useState(true);
//   useEffect(()=>{

//   }, [searchContent])
  return (
    <Box
      sx={{
        width: {
          xs: "95%",
          sm: "65%",
          md: "50%",
        },
        maxHeight: "70vh",
        position: "fixed",
        top: { xs: "10%", sm: "20%" },
        zIndex: "2",
        backgroundColor: Theme.palette.primary.main,
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "10px 10px 10px " + Theme.palette.primary.other,
        minHeight: "50%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
        }}
      >
        <Typography>Searched Profile</Typography>
        <Close
          sx={{ cursor: "pointer" }}
          onClick={() => setSearchState(false)}
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            placeItems: "center",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          {loadingState && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
              }}
            >
              <RotateLoader />
              <Typography color="error">Ensure username is correct</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchProfile;