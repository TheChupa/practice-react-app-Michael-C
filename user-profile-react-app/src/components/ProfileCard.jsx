
const ProfileCard = ({ name, age, bio }) => {
   
    return(
        <div className="profile card">
            <p className = "profiles">
                {name}
                <br/>
                {age}
                <br />
                {bio}
            </p>
        </div>
    )
}

export default ProfileCard;