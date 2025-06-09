import { Instructor } from "../../../components/Home/features/interfaces";
import "../CSS/instructor.css"

const SingleInstructor: React.FC<{
    myInstructor: Instructor;
}> = ({myInstructor}) => {
    return ( 
        <div className="single-instructor">
            <div className="image-container">
                <img src={myInstructor.imageUrl} alt="instructor" />
            </div>
            <div className="info">
                <h1>{myInstructor.name}</h1>
                <p>{myInstructor.position}</p>
            </div>
        </div>
    );
}
 
export default SingleInstructor;