
import Google from '../../../src/assets/image/google.png'
import interswitch from '../../../src/assets/image/interswitch.png'
import Andela from '../../../src/assets/image/Andela.png'
import Microsoft from '../../../src/assets/image/Microsoft_logo.png'
import Paystack from '../../../src/assets/image/Paystack.png'
import brewery from '../../../src/assets/image/brewery.png'
import Wema from '../../../src/assets/image/Wema-Bank-Logo.png'
import Clan from '../../../src/assets/image/clan-logo.png'
import edozzier from '../../../src/assets/image/edozzier.png'
import monie from '../../../src/assets/image/moneymie.png'
import Army from '../../../src/assets/image/Nigerian_Army.png'
import credit from '../../../src/assets/image/aella-credit.png'
const Partner = () => {
  return (
    <section className='partner'>

    <div style={{marginLeft:'45%', fontWeight:'bolder', fontSize:'20px'}} className='part'><h1>Partners</h1></div>
    <section className='secondParner'>
    <div className='div'>
      <img src={Google} alt="" className='google' />
      <img src={interswitch} alt="" className='google'/>
      <img src={Andela} alt="" className='google'/>
      <img src={Microsoft} alt="" className='google'/>
    </div>
    <div style={{marginTop:'40px'}} className='div'>
      <img src={Paystack} alt="" className='google'/>
      <img src={brewery} alt="" className='google'/>
      <img src={Wema} alt="" className='google'/>
      <img src={Clan} alt="" className='google'/>
    </div>
    <div style={{marginTop:'40px'}} className='div'>
      <img src={edozzier} alt="" className='google'/>
      <img src={monie} alt="" className='google'/>
      <img src={Army} alt="" className='google'/>
      <img src={credit} alt="" className='google'/>
    </div>
    </section>
    </section>
  )
}

export default Partner
