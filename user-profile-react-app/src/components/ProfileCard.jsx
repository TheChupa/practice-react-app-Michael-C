
const ProfileCard = props => {
   
const { name, age, bio } = props.profile

    return(
        <div className="profile card">
            <p className = "profiles">
                Name :  {name}
                <br/>
                Age :   {age}
                <br />
                Bio :   {bio}
            </p>
        </div>
    )
}

export default ProfileCard;