import { Icon } from './../../components'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useLocalStorage } from 'react-use'
import { Navigate } from 'react-router-dom'


const Input = ({name, label, error, ...props}) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-bold text-red1 mb-2">{label}</label>
        <input name={name} id={name} {...props} className={`p-3 border border-grey1 rounded-xl focus:outline focus:outline-1 focus:outline-red1 ${error && 'border-red2'}`}/>
        <spam className='p-2 text-sm text-red2' >{error}</spam>
    </div>
)

const validationSchema = yup.object().shape({
    name: yup.string().required('Preencha seu nome'),
    username: yup.string().required('Preencha seu nome de usuário'),
    email: yup.string().email('Informe um e-mail válido!').required('Preencha seu email'),
    password: yup.string().required('Senha é obrigatória')
})

export const Cadastro = () => {
    const [auth, setAuth] = useLocalStorage('auth', {})
    const formik = useFormik({
        onSubmit: async (values) => {  //envio das informações para o back end! As validações de campo já foram realizada pelo yup!
            const res = await axios({
                method: 'post',
                baseURL: import.meta.env.VITE_API_URL, //endereço temporário
                url: '/users',
                data: values
            })

        },
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: ''
        },
        validationSchema
    })

    if (auth?.user?.id) {    // as ? servem para não dar erro caso exista um usuário sem id
        return <Navigate to="/dashboard" replace={true} />
      }
    
    return (
        <div>
             <header className="p-4 border-b border-red3">
                <div className="container max-w-xl flex justify-center">
                    <img src="/assets-natrave/logo/logo-fundo-branco.svg" className="w-32 md:w-40" />
                </div>
             </header>

             <main className="p-4 container max-w-md">
                <div className="p-4 flex space-x-4 items-center">
                    <a href="/">
                        <Icon name="back" className="h-6" />
                    </a>
                    <h2 className="text-xl font-bold">
                        Crie na sua conta
                    </h2>
                </div>

                <form className="space-y-6 p-4" onSubmit={formik.handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        label="Seu nome"
                        placeholder="Digite seu nome"
                        error={formik.errors.name && formik.touched.name}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Input
                        type="text"
                        name="username"
                        label="Seu nome de usuário"
                        placeholder="Digite um nome de usuário"
                        error={formik.errors.username && formik.touched.username}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Input
                        type="text" 
                        name="email"
                        label="Seu e-mail"
                        placeholder="Digite seu e-mail"
                        error={formik.errors.email && formik.touched.email}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Sua senha"
                        placeholder="Digite uma senha"
                        error={formik.errors.password && formik.touched.password}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div></div>
                    <button 
                        type="submit" 
                        className="text-center w-full  bg-red2 text-white px-8 py-3 rounded-xl disabled:opacity-50" 
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        {formik.isSubmitting ? 'Criando cadastro...' : 'Criar cadastro' }
                    </button> 

                </form>
             </main>
        </div>
    )
}