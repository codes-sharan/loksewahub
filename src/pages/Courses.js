import React from "react";
import Toast from "react-bootstrap/Toast";

const Courses = () => {
  return (
    <>
      <br /> <br />
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
      <br /> <br />
    </>
  );
};

export default Courses;

// import React from "react";
// import { Button, Card } from "react-bootstrap";

// const Courses = () => {
//   const CourseSets = [
//     {
//       id: 1,
//       title: "Course Set 1",
//       image: "../Course1.jpg", // Make sure these images are in your public/images folder
//       description: "Test your knowledge with Arts.",
//     },
//     {
//       id: 2,
//       title: "Course Set 2",
//       image: "/Course2.jpg",
//       description: "Dive into challenging questions with Culture.",
//     },
//     {
//       id: 3,
//       title: "Course Set 3",
//       image: "/Course3.jpg",
//       description: "Check your skills in Religion.",
//     },
//     {
//       id: 4,
//       title: "Course Set 4",
//       image: "/Course4.jpg",
//       description: "Explore new topics with Science.",
//     },
//     {
//       id: 5,
//       title: "Course Set 5",
//       image: "/Course5.jpg",
//       description: "Take on the ultimate challenge in Politics.",
//     },
//   ];

//   return (
//     <>
//       <h1>Courses </h1>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

// export default Courses;
