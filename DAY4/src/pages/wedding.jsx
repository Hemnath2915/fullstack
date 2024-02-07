import { Panel } from 'rsuite';
import "../assets/css/wedding.css";
import NavigationBar from "../components/navbar";
import NavigationBar2 from './eventnav';
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';



export default function Wedding(){




   
    return(
        <>
        <div>
        {/* <div className='home'> */}
        <NavigationBar2/>
       
            {/* </div> */}
              <h1  style={{textAlign:'center'}}>TECHNICAL EVENTS</h1>
     
            <div >
                <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:50}}>
               
                 
           <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px'}}>
                <div style={{marginRight:'20px'}}>
                <img src="https://img.freepik.com/free-vector/database-digital-information-storage-organization-technical-support-worker-cartoon-character-seo-optimization-computer-hardware-vector-isolated-concept-metaphor-illustration_335657-2796.jpg?size=626&ext=jpg&ga=GA1.1.949482815.1689135670&semt=sph" height="400" width='400' style={{borderRadius:1200}}/>
                {/* <img src="" height="400" /> */}
             </div><Panel style={{fontFamily:'cursive',fontSize:25,textAlign:'center'}} header ="TECHNO VIDYA" >
        
      <p style={{flexGrow:1}}>
        <small style={{fontSize:16,fontFamily:'cursive'}}>
        Overview: TechnoVidya, a blend of technology and learning, is an all-inclusive project exhibition. Participants can showcase their engineering projects, including robotics, AI models, IoT devices, etc. A panel of professors and industry experts will judge the projects based on their originality, applicability and complexity.

How to organize: You would need an exhibition hall for display of projects, a registration portal for participants, and a team of judges. The event can be spread over 2 days for proper judging and audience viewing.
      
        </small>
      </p>
       
           </Panel>
          </Panel>
    
         
      <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:50}}>
      
       <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px'}}>
        <div style={{marginRight:'20px'}}>
    <img src="https://img.freepik.com/free-vector/online-assistant-user-help-frequently-asked-questions-call-center-worker-cartoon-character-woman-working-hotline_335657-2336.jpg?size=626&ext=jpg&ga=GA1.1.949482815.1689135670&semt=sph" height="400" width="400" style={{borderRadius:1200}}/>
    </div><Panel style={{fontFamily:'cursive',fontSize:25,textAlign:'center'}} header="CONGUBLA">
      <p>
        <small style={{fontSize:16,fontFamily:'cursive'}}>
        Welcome to Cognebula – 24 Step into our National Level Technical Symposium, orchestrated by the minds of the Department of Artificial Intelligence & Data Science. Experience an electrifying convergence where cutting-edge technology meets creative brilliance. Our event seamlessly blends tech and non-tech domains, offering a dynamic atmosphere for limitless knowledge. Join us on a journey fuelled by artificial intelligence, redefining the symposium experience. Welcome to a celebration of excellence, where the future unfolds at every keystroke.
        
        </small>
      </p>
          </Panel>
            </Panel>
           
            </div>
            </div>
           
            </div>
            <div>
                <h1 style={{textAlign:'center',marginTop:2}}>LET'S GET INTO OUR EVENTO!!</h1>
                <button  style={{marginTop:60,marginLeft:650,fontSize:40,marginBottom:40}}><Link to='/info'>CLICK HERE</Link></button>
            </div>  
            </div>
          
        </>
    )
}
