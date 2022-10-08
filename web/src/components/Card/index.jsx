import axios from 'axios'
import { useFormik } from 'formik'
import { useLocalStorage } from 'react-use'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    scoreTeamA: yup.string().required(),
    scoreTeamB: yup.string().required()
})

export const Card = ({idGame, teamA, teamB, gameDate, grupo, scoreTeamA, scoreTeamB, disabled}) => {
    const [auth] = useLocalStorage('auth')
    const formik = useFormik({
        onSubmit: (values) => {
            axios({
                method: 'post',
                baseURL: import.meta.env.VITE_API_URL,
                url: '/palpites',
                headers: {
                    authorization: `Bearer ${auth.accessToken}`
                },
                data: {
                    ...values,
                    idGame
                }
            })
        },
        initialValues: {
            scoreTeamA,
            scoreTeamB
        },validationSchema

    })

    return (
      <div className='rounded-xl border border-grey1 p-4 text-center space-y-4'>
        <span className='text-xs md:text-base text-red1 font-bold'>{grupo}</span>
        <span className="text-red1 font-bold"> - </span>
        <span className='text-xs md:text-base text-red1 font-bold'>{gameDate}</span>
        <form className='flex space-x-4 justify-center items-center'>
            <span className='uppercase text-sm md:text-base'>{teamA}</span>
            <img src={`/assets-natrave/bandeiras/${teamA}.png`} className='w-[40px] h-[40px]  md:w-56px] md-h[56px]'></img>

            <input 
                type="number" 
                name="scoreTeamA"
                className='bg-red3/[0.2] text-red1 rounded text-center w-[40px] h-[40px]  md:w-56px] md-h[56px]'
                value ={formik.values.scoreTeamA}
                onChange={formik.handleChange}
                onBlur={formik.handleSubmit}
                disabled={disabled}
            />
            <span className='mx-4 text-red1 font-bold'> X </span>
            <input 
                type="number" 
                name="scoreTeamB" 
                className='bg-red3/[0.2] text-red1 rounded text-center w-[40px] h-[40px]  md:w-56px] md-h[56px]'
                value ={formik.values.scoreTeamB}
                onChange={formik.handleChange}
                onBlur={formik.handleSubmit}
                disabled={disabled}
            />

            <img src={`/assets-natrave/bandeiras/${teamB}.png`} className='w-[40px] h-[40px] md:w-56px] md-h[56px]'></img>
            <span className='uppercase' >{teamB}</span>
        </form>
     </div>
    )
}