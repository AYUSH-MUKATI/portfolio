import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Doctorify.jpg'
import olximage from '../../Assets/Environment.png'
import netfliximage from '../../Assets/Tree_Traversal.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="Doctorify"
                description="The Disease Detection App is an innovative and user-friendly 
                application designed to revolutionize the way diseases are identified, diagnosed, and managed. 
               By harnessing the power of advanced technology and Machine Learning, 
               this app aims to enhance healthcare accessibility, efficiency, 
               and accuracy for individuals worldwide."
                ghLink="https://ayush-mukati.github.io/Doctorify/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Tree Traversal Simulation"
                description="The Tree Traversal Algorithm Website is a comprehensive online platform dedicated 
                to educating and facilitating the understanding of tree data structures and their traversal algorithms. 
                This website serves as a valuable resource for computer science enthusiasts, students, 
                and professionals seeking to enhance their knowledge and skills in tree traversal technique."
                ghLink="https://projectexibition-1.github.io/Project_Exibition-1/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Environmental Awareness Website"
                description="The Environmental Awareness Website is a dynamic online platform dedicated to raising awareness about 
                environmental issues, promoting sustainable practices, and inspiring individuals to take action towards a greener and more sustainable future. 
                This website serves as a valuable resource for anyone passionate about environmental conservation, 
                providing information, educational content, and practical tips for making a positive impact on the planet."
                ghLink="https://project-exebition-ii.github.io/Project_Exibition_II/"
              />
            </Col>

            
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist