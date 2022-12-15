import useCoursesStore from "../store/courseStore";
import {useState} from "react";

export default function Courses(){
    const courses = useCoursesStore(state=>state.courses)
    const addCourse = useCoursesStore(state=>state.addCourse)
    const [course,setCourse] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        if(!course) return alert("Please insert course name")
        addCourse({
            id : Math.ceil(Math.random() * 1000),
            title : course
        })
    }
    console.log(courses)
    return(
        <div className="courses">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" onChange={(e)=>setCourse(e.target.value)} placeholder="Enter your course name"/>
                <input type="submit"/>
            </form>
            <ul>
                {courses.map(c=><li>{c.title}</li>)}
            </ul>
        </div>
    )
}