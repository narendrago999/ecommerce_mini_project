import React from 'react'
import SearchAppBar from '../../layout/HeaderBar/SearchAppBar/SearchAppBar'
import Details from './Details'
import Slider from './Slider'
import SecondHeader from '../../layout/HeaderBar/SecondHeader/SecondHeader'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import Cart from './Cart'
import PriceTable from './PriceTable'
import { ApiProvider } from '../../Context/ApiContext'
import CartDisplay from './CartDisplay'
import Cookies from 'js-cookie'
import Review from '../Checkout/Review'
import AddressForm from '../Checkout/AddressForm'
import Checkout from '../Checkout/Checkout'
const Home:React.FC = () => {

  const [AuthToken,setAuthToken]= React.useState('')

    React.useEffect(()=>{
      function get_auth_token(){
        const auth_token:string | undefined = Cookies.get('auth_token')
        
        if(auth_token){
          console.log("token", auth_token);
          setAuthToken(auth_token)
        }
      }
      get_auth_token()
    },[])

  return (
    <ApiProvider>
    <div className="home">
    <SearchAppBar />
    <div className="slider">
      <SecondHeader />
    </div>
    {window.location.pathname==='/cart'?AuthToken?
    <CartDisplay/>
    :<SignIn/>
    :<></>}
    {window.location.pathname==='/'?<><Slider /><Details /></>:<></>}
    {window.location.pathname==='/signup'?<SignUp />:<></>}
    {window.location.pathname==='/signin'?<SignIn />:<></>}
    {window.location.pathname==='/order-place'?<Checkout />:<></>}
    </div>
    </ApiProvider>
  )
}

export default Home