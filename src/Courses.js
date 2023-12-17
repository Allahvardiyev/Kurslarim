import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Course from "./Course";
import { useState } from "react";
function Courses({ courses, removeCourses }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];
  console.log(index);
  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };
  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };
  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <div className="courseMainDiv">
      <div className="courseTitleAndButton" onClick={getRandomCourse}>
        <h2>Kurslarim</h2>
        <button className="cardDeleteBtn">Rastgele Kurs Ata</button>
      </div>
      <div className="cardDiv">
        <button className="prevNextBtn" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price}</h4>
          </div>
          <p>{content}</p>
        </div>
        <button className="prevNextBtn" onClick={nextCourse}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
