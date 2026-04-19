==========================form data submit unload page===============================
const Hero = () => {
    
    const formData =(event)=>{
        event.preventDefault();
        // alert()
    }

    return (
        <div>
           <form onSubmit={formData}>
              <input  placeholder="Enter Your Name"/>
              <button type="submit">Send Message</button>
           </form>
        </div>
    );
};

export default Hero;
