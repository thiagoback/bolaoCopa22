export const Card = ({timeA, timeB, jogo}) => (
    <div className='rounded-xl border border-grey1 p-4 text-center space-y-4'>
        <span className='text-xs md:text-base border-grey1 font-bold'>{jogo.horario}</span>

        <div className='flex space-x-4 justify-center items-center'>
            <span className='uppercase text-sm md:text-base'>{timeA.slug}</span>
            <img src={`/assets-natrave/bandeiras/${timeA.slug}.png`} className='w-[40px] h-[40px]  md:w-56px] md-h[56px]'></img>

            <input type="number" min="0" className='bg-red3/[0.2] text-red1 rounded text-center w-[40px] h-[40px]  md:w-56px] md-h[56px]'/>
            <span className='mx-4 text-red1 font-bold'> X </span>
            <input type="number" min="0" className='bg-red3/[0.2] text-red1 rounded text-center w-[40px] h-[40px]  md:w-56px] md-h[56px]'/>

            <img src={`/assets-natrave/bandeiras/${timeB.slug}.png`} className='w-[40px] h-[40px] md:w-56px] md-h[56px]'></img>
            <span className='uppercase' >{timeB.slug}</span>
        </div>
    </div>
)