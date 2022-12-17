import useCoursesStore from "../../store/courseStore";
import {useState} from "react";
import "./Courses.css";

export default function Courses(){
    const courses = useCoursesStore(state=>state.courses)
    const addCourse = useCoursesStore(state=>state.addCourse)
    const removeCourse = useCoursesStore(state=>state.removeCourse)
    const [course,setCourse] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        if(!course) return alert("Please insert course name")
        addCourse({
            id : Math.ceil(Math.random() * 1000),
            title : course
        })
        e.target.reset()
    }
    console.log(courses)
    return(
        <div className="courses">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" onChange={(e)=>setCourse(e.target.value)} placeholder="Enter your course name" />
                <input type="submit"/>
            </form>
            <ul>
                {courses.map(c=><li>
                    <span>{c.title}</span>
                    <button onClick={()=>removeCourse(c.id)}>X</button>
                </li>)}
            </ul>
        </div>
    )
}