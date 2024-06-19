import './EducationTile.css';
function EducationTile({image,collegeName,course,year,description}){
    return (
        <div className="tile">
            <img src={image} alt='college-name-image'></img>
            <div className='tile-texts'>
                <h1>{collegeName}</h1>
                <h2>{course}</h2>
                <h3>{year}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default EducationTile;