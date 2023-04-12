import { createTheme } from "@mui/material/styles";
import Button  from '@mui/material/Button';
import Card  from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { Typography } from "@mui/material";
// import { CenterFocusStrong } from "@material-ui/icons";

export const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#4caf50"
    },
    secondary: {
      main: "#ffffff"
    }
  },
  shape: {
    borderRadius: 4
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#4caf50"
        }
      },
      defaultProps: {
        elevation: 0
      }
    }
  }
});

export const dark = createTheme({
  palette: {
    mode:"dark",
    primary: {
      main: "#4caf50"
    },
    secondary: {
      main: "#4caf10"
    }
  },
  shape: {
    borderRadius: 4
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#ffffff"
        }
      },
      defaultProps: {
        elevation: 0
      }
    }
  },
});
export const theme1 = {
    palette: {
      primary: {
        main: "#1769aa"
      },
      secondary: {
        main: "#00000"
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          size: "large",
          sx: {
            borderRadius: "10px"
          }
        }
      },
      MuiIcon: {
        size: "large"
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: "green"
          }
        },
        defaultProps: {
          elevation: 20
        }
      },
    }
  };


  
export const ButtonTable = styled(Button)(({ theme }) => ({
  maxWidth:"10px !important",
  minWidth:"10px !important",
  width: "10px",
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}));

export const CardMapDetails = styled(Card)(({ theme }) => ({
  textAlign:"center",
  minWidth:354, 
  maxWidth: 354,
  maxHeight:605, 
  minHeight:605,
  marginLeft:"5px", 
  border:"2px solid #f0f0f0", 
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    // boxShadow: 0 0 0 2px ${theme.palette.background.paper},
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.😎',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#f2f2f2' :'#1A2027' ,
  fontWeight: 700,
  textAlign:"center",

}));