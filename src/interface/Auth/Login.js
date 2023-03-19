import React , {useState} from 'react'
import '../../Styles/login.css'
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
function Login() {
  const [loginInput, setLoginInput] = useState({email: '',mot_de_passe: '' ,showPassword: false,error_list:[], });
  const handleInput =  (e) => {
    e.persist();
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };
  const handleClickShowPassword = () => {
      setLoginInput({
        ...loginInput,
        showPassword: !loginInput.showPassword,
      });
    };
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };    
  return (
      <div className='login-container'>
          <h1>Connexion</h1>
          <form action="" method="post">
              <div className="imgcontainer">
                <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
              </div>
              <div className="container">
              <FormControl fullWidth sx={{ marginTop: 2 }} variant="outlined" color="success" >
                          <InputLabel htmlFor="mot_de_passe" >Mot de passe</InputLabel>
                          <OutlinedInput 
                            id="mot_de_passe"
                            type={loginInput.showPassword ? 'text' : 'password'}
                            value={loginInput.mot_de_passe}
                            name="mot_de_passe"
                            onChange={handleInput}
                            placeholder='Entrer votre mot de passe'
                            startAdornment={
                              <InputAdornment position="start">
                                <LockIcon/>
                              </InputAdornment>
                            }
                            endAdornment={<InputAdornment position="end">
                                            <IconButton
                                              aria-label="toggle password visibility"
                                              onClick={handleClickShowPassword}
                                              onMouseDown={handleMouseDownPassword}
                                              edge="end" >
                                                {loginInput.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                          </InputAdornment>
                            }
                            error={!!loginInput.error_list.mot_de_passe}

                            label="mot de passe" /> 
                            <FormHelperText error={true}>
                            {loginInput.error_list.mot_de_passe}           
                          </FormHelperText> 
                      </FormControl>
              <div class="inputbox">
                    <label htmlFor="uname"><b>Email</b></label>
                    <input type="text" placeholder="Entrer votre Email" name="email" required/>
                </div>
                <div class="inputbox">
                    <label htmlFor="mdp"><b>Password</b></label>
                    <input type="password" placeholder="Entrer votre mot de passe" name="mdp" required/>
                </div>
                <div>
                    <button type="submit">Se connecter</button>                  
                </div>
              </div>
              <p><Link to="/oublier-mot-de-passe">Mot de passe oublié</Link></p>
              <p>Nouveau utilisateur : <Link to="/inscription">S'inscrire</Link></p>
          </form>
      </div>
  )
}

export default Login;
