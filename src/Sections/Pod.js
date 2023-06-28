import React from 'react';
import '../App.css';
import podWorkflow from './Images/pods-workflow.jpg';
import podCode from './Images/pod-code.jpg';



function Pod() {
  return (
    <div className="App-body">
      <h2>Deployment Workflow</h2>
      <img src={podWorkflow} className="images" alt="podWorkflow" />
      <p>
        The procedure for constructing and deploying an application to Kubernetes can be
        articulated as follows: The process begins with the application code, which is subsequently 
        built into a container image. This container image is then stored in a designated
        repository. Following this, it is defined in a Kubernetes manifest, which is subsequently
        posted to the API server. Upon the completion of these steps, Kubernetes assumes
        responsibility for the remaining aspects of the process.
      </p>
      <br />
      <h2>Deploying a Pod</h2>
      <p>
        In Kubernetes, a Pod is the smallest and simplest unit in the Kubernetes object model
        that you create or deploy. The Pod manifest is a set of instructions in a YAML or
        JSON format file that Kubernetes uses to create and manage a Pod. 
        Here's a basic example of a Kubernetes Pod obejct definition and a manifest file:
      </p>
      <img src={podCode} className="images" alt="podCode" />
      <p>
        The main parts are:
        <ul class="dashed-list">
          <li>
            <u>apiVersion:</u> This is the version of the Kubernetes API you're using to create this
            object. The apiVersion has the format of {"<group>/<version>"}. For example,
            the apps group includes resources like Deployment, StatefulSet, DaemonSet, and
            others, but for some of the core resources like Pod, Service, Volume, e.g., the
            group name is not mentioned.
          </li>
          <li>
            <u>kind:</u> This is the kind of object you want to create. In this case, you're creating a Pod.
          </li>
          <li>
            <u>metadata:</u> This includes data that helps uniquely identify the object, including a name string, UID, and optional namespace.
          </li>
          <li>
            <u>spec:</u> This is where you specify the desired state of the object. Here, it includes the desired set of containers to run on the Pod.
          </li>
        </ul>
        The command <b>kubectl apply -f pod.yml</b> initiates a declarative deployment process
        using a manifest file, specified by the name provided afterwards.
        The command <b>kubectl get pods -watch</b>, provides a real-time observation of the state
        of all the Pods within the cluster. This allows the monitoring of the status and changes
        to all running Pods in an ongoing manner.
      </p>
  </div>
  );
}

export default Pod;
