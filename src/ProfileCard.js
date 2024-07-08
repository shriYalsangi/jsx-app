const ProfileCard = (props) => {
    const {title, handle, image, description} = props
    return (
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by4">
                <img src={image} alt={title} />
            </figure>
            
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
            </div>
            <div className="content">
                {description}
            </div>
        </div>
        
    </div>
    )
}

export default ProfileCard;