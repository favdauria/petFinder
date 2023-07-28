import { useState } from "react";
import axios from "axios";
import { router } from "next/router";
import SiteNav from '@/components/sitenav'

function LoginPage() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(credentials);
        const response = await axios.post('/api/auth/login', credentials)
        console.log(response)
        if (response.status == 200) {
            router.push('/dashboard');
        }
        
    }
    
    return(
        <>
        <SiteNav/>
        <div className='row loginBox' >
            <div className='col imgBox'>
                <img src='/src/assets/loginDog.png'/>
            </div>
            <div className='col formBox' >
                <p class = 'iniciarSesion'>Inciar sesión</p>
                <form onSubmit={handleSubmit}>
                    <div class='form-group container-fluid'>
                        <label for="inputEmail">Email:</label>
                        <input id ='inputEmail' class = 'form-control ' name='email' type='email' onChange={handleChange}/>
                        <label for="inputPassword">Password:</label>
                        <input id = 'inputPassword' class = 'form-control ' name='password' type='password' onChange={handleChange} />
                        <input type="submit" id="submit-form" class="d-none" />
                        <br/>
                    </div>
                </form>
                <label for="submit-form" tabindex="0"><button class='btn btn-primary'>Iniciar sesion</button></label>
                <br/>
                <a href='#'>Has olvidado la contraseña?</a>
            </div>
        </div>
        </>
    )
}





// CODIGO LOGIN ANTERIOR
// function LoginPage() {
//     const [credentials, setCredentials] = useState({
//         email: '',
//         password: ''
//     })
//     const handleChange = (e) => {
//         setCredentials({
//             ...credentials,
//             [e.target.name]: e.target.value
//         })
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         // console.log(credentials);
//         const response = await axios.post('/api/auth/login', credentials)
//         console.log(response)
//         if (response.status == 200) {
//             router.push('/dashboard');
//         }    
//     }
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input name='email' type='email' placeholder='email'
//                     onChange={handleChange}
//                 />
//                 <input name='password' type='password' placeholder='password'
//                     onChange={handleChange}
//                 />
//                 <button>Login</button>
//             </form>
//         </div>
//     )
// }
// export default LoginPage;

export default LoginPage;