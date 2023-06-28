import React from 'react';
import '../App.css';



function Introduction() {
  return (
    <div className="App-body">
    <h2>The History of Kubernetes</h2>
    <p>
      Kubernetes originated from Google and was initially released as an open-source project
      in the summer of 2014. Subsequently, it was entrusted to the Cloud Native Computing
      Foundation. Since then, Kubernetes has experienced an extraordinary ascent, emerging as one of the most prominent and influential open-source technologies worldwide.
      Typical of innovative cloud infrastructure initiatives, Kubernetes is implemented using
      the Go programming language, commonly referred to as Golang. It is worth noting
      that Kubernetes is often abbreviated as "K8s," where the number 8 is employed as a
      substitution for the eight characters occurring between the letters "K" and "s".
    </p>
    <br />
    <h2>The Role of K8s</h2>
    <p>
      In the context of application modernization and management, it is evident that the
      transition from legacy virtual machine-based applications to containerized applications
      necessitates a significant increase in the number of containers. Consequently, effective
      management of these containerized applications becomes imperative. In light of this,
      Kubernetes emerges as a valuable solution.
    </p>
    <p>
      The fundamental premise is to interact with Kubernetes, informing it about the application and its constituent services, and requesting it to handle the execution and
      orchestration on our behalf. Kubernetes fulfills this role, relieving us of the burden of
      intricate decision-making and implementation details.
    </p>
  </div>
  );
}

export default Introduction;
