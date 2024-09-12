import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// Sample data for quiz sets
const quizSets = [
  {
    id: 1,
    title: "Quiz Set 1",
    image: "../quiz1.jpg", // Make sure these images are in your public/images folder
    description: "Test your knowledge with Arts.",
    url: "https://api.loksewahub.com",
  },
  {
    id: 2,
    title: "Quiz Set 2",
    image: "/quiz2.jpg",
    description: "Dive into challenging questions with Culture.",
    url: "https://quiz.loksewahub.com",
  },
  {
    id: 3,
    title: "Quiz Set 3",
    image: "/quiz3.jpg",
    description: "Check your skills in Religion.",
    url: "https://api.loksewahub.com",
  },
  {
    id: 4,
    title: "Quiz Set 4",
    image: "/quiz4.jpg",
    description: "Explore new topics with Science.",
    url: "https://test.loksewahub.com",
  },
  {
    id: 5,
    title: "Quiz Set 5",
    image: "/quiz5.jpg",
    description: "Take on the ultimate challenge in Politics.",
    url: "https://new.loksewahub.com",
  },
];

const Quiz = () => {
  return (
    <>
      <div className="d-flex flex-wrap">
        {quizSets.map((quiz) => (
          <Card key={quiz.id} style={{ width: "18rem", margin: "1rem" }}>
            <Card.Img variant="top" src={quiz.image} alt={quiz.title} />
            <Card.Body>
              <Card.Title>{quiz.title}</Card.Title>
              <Card.Text>{quiz.description}</Card.Text>
              <Link to={quiz.url}>
                <Button variant="primary">Start Quiz</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Quiz;
