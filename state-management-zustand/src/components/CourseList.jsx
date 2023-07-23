import React from 'react'
import useCourseStore from '../stores/courseStore'

const CourseList = () => {
    const {courses, removeCourse, toggleCourseStatus} = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus
        })
    )
    return (
        <>
            <ul>
                {
                    courses.map((course,index) => {
                        return (
                            <React.Fragment key={index}>
                                <li className={`course-item`} style={{backgroundColor: course.completed ? "#00FF0044" : "grey" }}>
                                    <span className="course-item-col-1">
                                        <input type='checkbox' checked={course.completed} onChange={() => toggleCourseStatus(course.id)}/>
                                    </span>
                                    <span>
                                        {course?.title}
                                    </span>
                                    <button className="delete-btn" onClick={() => removeCourse(course.id)}>Delete</button>
                                </li>
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default CourseList