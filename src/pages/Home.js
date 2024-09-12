import React from "react";
import "./Home.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  ListGroup,
} from "react-bootstrap";
import NewsTicker from "../components/NewsTicker";

const Home = () => {
  return (
    <Container fluid className="p-4">
      <NewsTicker />

      <Row className="mb-4 align-items-center bg-success-subtle">
        <Col md={6} className="text-center text-animation text-container">
          <Card className="border-0">
            <Card.Body className="align-middle">
              <Card.Title className="display-4">
                Welcome to LoksewaHub.Com!
              </Card.Title>
              <Card.Text className="lead">
                Your Ultimate Destination for Public Service Examination
                Preparation
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="text-center">
          <Image
            src={`${process.env.PUBLIC_URL}/homefirstimage.jpeg`}
            alt="Homepage"
            className="img-small"
          />
        </Col>
      </Row>

      <section className="mb-4">
        <h2>Achieve Your Dreams with LoksewaHub</h2>
        <p>
          At LoksewaHub, we understand the importance of public service exams in
          shaping your career. Our mission is to provide you with the best
          resources, guidance, and support to help you succeed in your Loksewa
          exams. Whether you are a first-time aspirant or a seasoned candidate
          looking to improve your scores, we are here to help you every step of
          the way.
        </p>
      </section>

      <section className="mb-4 bg-success-subtle">
        <h2>Why Choose LoksewaHub?</h2>
        <ListGroup>
          <ListGroup.Item>
            <strong>Comprehensive Study Materials:</strong> Our extensive
            library of study materials covers all the subjects and topics you
            need to master for the Loksewa exams. From detailed notes and eBooks
            to practice questions and previous year papers, we have everything
            you need to excel.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Expert Guidance:</strong> Learn from the best with our team
            of experienced educators and former public service exam toppers. Our
            expert instructors provide insightful lessons, tips, and strategies
            to help you understand complex concepts and perform at your best.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Interactive Learning:</strong> Engage in interactive
            learning with our live classes, webinars, and discussion forums. Get
            your doubts cleared in real-time and participate in group studies to
            enhance your preparation.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Personalized Preparation Plans:</strong> We believe that
            every student is unique, and so should be their preparation
            strategy. Our personalized study plans are tailored to your
            strengths and weaknesses, helping you focus on areas that need
            improvement.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Mock Tests & Assessments:</strong> Practice makes perfect.
            Our series of mock tests and assessments simulate the real exam
            environment, helping you build confidence and improve your time
            management skills.
          </ListGroup.Item>
        </ListGroup>
      </section>

      <section className="mb-4 bg-success-subtle">
        <h2>What We Offer</h2>
        <ListGroup>
          <ListGroup.Item>
            <strong>Subject-Wise Study Material:</strong> Detailed notes, video
            lectures, and quizzes for every subject.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Previous Year Papers:</strong> Access to a vast collection
            of past exam papers with solutions.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Daily Current Affairs:</strong> Stay updated with the latest
            news and events relevant to your exams.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Expert Mentorship:</strong> One-on-one mentorship sessions
            with our experienced educators.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Discussion Forums:</strong> Join our community of aspirants
            to share knowledge and resources.
          </ListGroup.Item>
        </ListGroup>
      </section>

      <section className="mb-4">
        <h2 className="bg-success-subtle">Success Stories</h2>
        <p>
          Hear from our successful students who have achieved their dreams with
          LoksewaHub. Their stories of dedication, hard work, and success will
          inspire you to aim higher and achieve your goals.
        </p>
      </section>

      <section className="mb-4 text-center">
        <h2 className="bg-success-subtle">Join LoksewaHub Today!</h2>
        <p>
          Embark on your journey to success with LoksewaHub. Sign up now and get
          access to our exclusive resources and start your preparation on the
          right track. Together, let's achieve your dreams of serving the
          nation.
        </p>
        <Button variant="success" href="mailto:helloloksewahub@gmail.com">
          Contact Us
        </Button>
      </section>

      <footer className="text-center mt-4">
        <p>
          <strong>
            LoksewaHub - Your Partner in Public Service Exam Success
          </strong>
        </p>
        <p>
          <a href="mailto:helloloksewahub@gmail.com" className="text-dark">
            helloloksewahub@gmail.com
          </a>
        </p>
        <p>Address: LoksewaHub, Kathmandu, Nepal</p>
      </footer>
    </Container>
  );
};

export default Home;
