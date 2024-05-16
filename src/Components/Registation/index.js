import './index.css'
import image from '../../Images/findBubai_image.jpg'
import { TextField } from '@mui/material'

function UserRegistationCom() {
  return (
    <div className='registati'>
       <div className='user-card'>
         <img src='https://t4.ftcdn.net/jpg/05/58/06/81/360_F_558068185_sZmfyrWuzHTfzLdwJuj1ALQcBtbKAtbA.jpg'
          className='regi-img'/>
       
         <div>
         <TextField id="outlined-basic" label="Email" variant="outlined" className='meterial-input'/> <br/>
         <TextField id="outlined-basic" label="User Name" variant="outlined" className='meterial-input'/> <br/>
         <TextField id="outlined-basic" label="Email" variant="outlined" className='meterial-input'/>

       
         </div>

      </div>

    </div>
  )
}

export default UserRegistationCom