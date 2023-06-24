import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="App-body">
        
    <h2>About Kubernetes (K8s)</h2>
    <p>
      Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, 
      and management of containerized applications. It groups containers that make up an 
      application into logical units for easy management and discovery.
    </p>
    <h2>K8s Architecture</h2>
    <p>
      Kubernetes follows a client-server architecture. It's possible to have a multi-master setup 
      (for high availability), but by default there is a single master server which acts as the 
      control plane and multiple nodes that host the applications running in pods. The master 
      communicates with nodes through the Kubernetes API Server.
    </p>
  </div>
  );
}

export default Home;
