import React , {useState , useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import { apiStart , apiFail , apiSuccess } from "../redux/actions/pincodeAction";
import PincodeData from "./PincodeData";
import axios from "axios";

const PincodeInput = () =>{

    const [pincode , setPincode] = useState('');
    const dispatch = useDispatch();
    const {loading , data , err} = useSelector(state => state) 
  

   function callPincode (e) {

    e.preventDefault();
   dispatch(apiStart())
   axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
    .then(data=>dispatch(apiSuccess(data.data)))
     .catch(err => dispatch(apiFail(err.message)));
     
  }

    return(
        <div>

        {

            data.length > 0 && <PincodeData data={data} pincode={pincode}
            ></PincodeData>
        }    
           {
            data.length <= 0 &&  <form className="inputForm">
            <h3>Enter Pincode</h3>
            <input type='text' maxLength="6" placeholder="Pincode" onChange={(e)=>setPincode(e.target.value)}  value={pincode}/>
            <button onClick={callPincode}>Lookup</button>
        </form>
           }
        </div>
    )
}

export default PincodeInput