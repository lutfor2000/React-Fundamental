

const hasMeeting = true;

const meeting = new Promise((resolve, reject)=>{
    if (!hasMeeting) {

        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10pm"
        }

        resolve(meetingDetails)
        
    }else{
        reject(new Error("Meeting already reject"))
    }

});



function addToCalender(meetingDetails){
    const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calender)
}


async function myMeeting() {

   try{
        const meetingDetails = await meeting;
        const calender = await addToCalender(meetingDetails)
        console.log(calender);
   }catch(error){
        console.log(error.message);
        
   }
    
}

myMeeting()
