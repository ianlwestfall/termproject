import React, { useEffect, useState } from 'react';
import './Education.css';

const Education = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data/education.json`)
            .then(response => response.json())
            .then(data => setEducation(data.education))
    }, []);

    return (
        <section className="education">
            {education.map((education, index) => (
                <div key={index}>
                    <h3>{education.school} {education.degree}</h3>
                    {education.courses && (
                        <div className="education-grid">
                            {education.courses.map((course, index) => (
                                <div className="classes" key={index}>
                                    <h4>{course.courseNumber}</h4>
                                    <h3>{course.courseName}</h3>
                                    <p>{course.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Education;