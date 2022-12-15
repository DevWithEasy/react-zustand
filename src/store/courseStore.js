import create from "zustand";
import {devtools,persist} from "zustand/middleware";

const courseStore = (set)=>({
    courses : [],
    addCourse : (course)=>{
        set((state)=>({
            courses : [...state.courses,course]
        }))
    },
    removeCourse : (courseId)=>{
        set((state)=>({
            courses : state.courses.filter(c=>c.id !==courseId)
        }))
    }
})
const useCoursesStore =create(
    devtools(
        persist(courseStore,{
            name : "courses"
        })
    )
)
export default useCoursesStore;
