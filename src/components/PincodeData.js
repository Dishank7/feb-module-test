

const PincodeData = ({data , pincode}) => {

  console.log(data , pincode)

    return(
        <div className="mainDiv">
           <h2>Pincode : {pincode}</h2>
           <h2>Message:{data[0].Message} </h2>

           <input type='search' />

           <div className="pincodeDiv">
           {
           
            data[0].PostOffice.map((value)=>{
                return(
                    <div className="pincodeData">
                    <span>Name:{value.Name}</span>
                    <span>BranchType:{value.BranchType}</span>
                    <span>DeliveryStatus:{value.DeliveryStatus}</span>
                    <span>District:{value.District}</span>
                    <span>State:{value.State}</span>
                    </div>
                )
            })
           }
           </div>
          
        </div>
    )
}

export default PincodeData