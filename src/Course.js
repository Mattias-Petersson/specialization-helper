import kurser from "./kurser";
import React, { useState } from "react";
function Course() {
    const courses = [kurser]

    return (
        <>
            <div>
                <h3>Kurskod | Kursnamn | HP</h3>
                {Object.keys(courses).map((key) => {
                    return Object.keys(courses[key]).map((key2) => {
                        return (
                            <div>
                                <button
                                    className="btn btn-outline-primary btn-block mr-1"
                                    key={courses[key][key2].kurskod}
                                    onClick={() => {

                                    }}
                                >
                                    {courses[key][key2].kurskod} -
                                    {courses[key][key2].kursnamn} -
                                    {courses[key][key2].hp}

                                </button>
                            </div>
                        )
                    })
                })}
            </div>
        </>);
}

export default Course;