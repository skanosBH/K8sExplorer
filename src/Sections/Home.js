import React from 'react';
import '../App.css';
import { FaGithub, FaDocker } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="App-body">
      <h2 style={{ textAlign: 'center'}}>Technical Report: An Examination of Kubernetes within the Scope of Infrastructure and Containerization for Web Applications</h2>
      <p>
        Welcome to our website, proudly presenting the Technical Report on Kubernetes meticulously crafted by a 
        team of 12 brilliant students from the University of Stuttgart during the Summer Semester of 2023. 
        This report stems from our rigorous exploration during the course "Infrastructure and Containerization 
        for Web Applications" where we dived into Networks concepts, DNS, WWW, GNU/Linux and extensively covered Docker.
      </p>
      <h2>Group Members</h2>
      <ul>
        <li>Ahmad T****</li>
        <li>Ahmed E****</li>
        <li>Ahmed R****</li>
        <li>Ercan C****</li>
        <li>Frederik H****</li>
        <li>Glarin L****</li>
        <li>Heinrich B****</li>
        <li>Jakob R****</li>
        <li>Joris J****</li>
        <li>Pascal L****</li>
        <li>Skander E****</li>
        <li>Yichi Z****</li>
      </ul>
      <br/>
      <h4>Check out our project on</h4> 
      <div>
        <Link to="https://github.com/skanosBH/K8sExplorer">
            <FaGithub /> GitHub
          </Link>
        </div>
      <div>
        <Link to="https://hub.docker.com/repository/docker/skanos/poc-k8s-explorer/general">
          <FaDocker /> DockerHub
        </Link>
      </div>
    </div>
  );
}

export default Home;
