import { Panel } from 'rsuite';
import "../assets/css/home.css";
import NavigationBar from "../components/navbar";
import { Link, useNavigate } from 'react-router-dom';



export default function home(){
    const Navigate =useNavigate();
    const handleChange=()=>{
        Navigate("/wedding");
    }
    return(
        <>
        <div>
        <div className='home'>
        <NavigationBar/>
        <div className="contain">
            {/* <img className="homepic" src={homeback} alt="pic1" /> */}
            <div className="text-block">
                <p className="text1"></p>
             
            </div>
            </div>
            </div>
            <div style={{display:'flex'}}>
    
    <div>
        {/* <h1 className="AC">Namaste!</h1> */}
     <br></br>
     <br></br>
     <img className="tow" style={{width:600,height:600}} src="https://img.freepik.com/free-vector/ecological-press-conference-member-speaking-stage-before-audience-presenting-graphs-with-earth_74855-14011.jpg?w=996&t=st=1706696918~exp=1706697518~hmac=71371e06a8fad4ead6d42cbc8e9d496dc9a46a2a8c18db4ab07625244a76b111"></img>
     </div> 
     <div>
       <br></br>
       <br></br>
       
     <section className="about-section">
     <div className="cntainer">
       <div className="about-content">
         <h2 style={{textAlign:'center'}}className="af">EVENTO</h2>
         <h2 style={{textAlign:'center'}}>"Innovate or Perish: Charting the Course for Tomorrow's Tech. </h2>
       <p style={{textAlign:'center',fontStyle:'letter-spacing:0.08em',marginTop:40,fontSize:'20px',justifyContent:'space-between',marginRight:50}}>
       🚀 Embark on a transformative journey at EVENTO!, discover the forefront of industry/technology/theme. Immerse yourself in inspiring talks, interactive sessions, and unparalleled networking. Ignite innovation and reshape your future. Join us for a day that promises to redefine what's possible in industry/technology/theme! #EVENTO
       </p>
       </div>
       {/* <div><img className="ry" src="https://pngimg.com/d/yoga_PNG119.png"></img></div> */}
     </div>
   </section>
   </div> 
   </div>
      
            <div style={{ marginTop:90,flexDirection: 'row', display: 'flex', backgroundColor: "#dedede" }}>
  <div>
    <h1 style={{
      marginLeft: 550,
      fontFamily: 'Courier New, monospace', // Change the font to your preference
      textTransform: 'capitalize',
      fontWeight: 'bolder',
      animation: 'fadeInLeft 1s ease-in-out' // Add a fadeInLeft animation
    }}>EVENTO</h1>
  </div>


 
</div>
            <div >
                <div>
             <h1 style={{textAlign:'center',marginTop:150}}>Events</h1>
             </div>
                <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:100}}>
                <button onClick={handleChange}>
                 
           <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px'}}>
                <div style={{marginRight:'20px'}}>
             <img src="https://img.freepik.com/premium-vector/cybersport-team-abstract-concept-vector-illustration_107173-25064.jpg?size=626&ext=jpg&ga=GA1.1.949482815.1689135670&semt=ais" height="400" />
             {/* <img src="" height="400" /> */}
             </div><Panel header="TECHNICAL">
        
      <p style={{flexGrow:1}}>
        <small>
          {/* A suite of React components, sensible UI design, and a friendly development experience. */}
        </small>
      </p>
       
           </Panel>
          </Panel>
    
          </button>
      <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:100}}>
      <button ><Link to='/others'>
       <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px'}}>
    <img src="https://img.freepik.com/free-photo/young-sportive-man-daancing-breakdance-isolared-black-backgrounf-neon-with-mixed-lights_155003-45629.jpg?w=996&t=st=1706697332~exp=1706697932~hmac=0ccf4c64b351c00aeb130f04a8909b312226372d74cae2d15e4f2605821c082a" height="400" width="400"/>
        <Panel header="NON-TECHNICAL">
      <p>
        <small>
          
        </small>
      </p>
          </Panel>
            </Panel>
          </Link>
            </button>
            </div>
            </div>
           
            </div>
            </div>
       
        </>
    )
}