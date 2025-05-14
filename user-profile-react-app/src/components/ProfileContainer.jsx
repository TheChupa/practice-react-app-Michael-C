import ProfileCard from "./ProfileCard";
const ProfileContainer = () => {

    const profiles = [
        {
            id:1,
            name:"Michael",
            age:34 ,
            bio:"Bald man that lives near the AB factory."
        },
        {
            id: 2,
            name:"Darren",
            age: 48,
            bio:"Coached Europeans how to play REAL football." 
        },
        {
            id:3 ,
            name: "Ben",
            age: 39,
            bio: "Doom and pancake enjoyer. Loves his child.",
        },
        {
            id: 4,
            name: "Connor",
            age:29,
            bio:"Was born in the darkness, no one cared who he was until his screen changed colors.",
        }
    ]

    let profilecardJSX = profiles.map(profile => {
       return <ProfileCard key={profile.id} profile={profile} />;
});
    
return(

   <div>
   
       {profilecardJSX}
     </div> 
    )
}

export default ProfileContainer;