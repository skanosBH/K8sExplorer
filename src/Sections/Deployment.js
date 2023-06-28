import React from 'react';
import '../App.css';
import deploymentUpdate from './Images/deploy-update.jpg';
import deploymentCode from './Images/deployment-code.jpg';



function Deployment() {
  return (
    <div className="App-body">
    <h2>Replica Sets</h2>
    <p>
    The primary responsibilities of a ReplicaSet include the maintenance of Pod replicas, handling self-healing, and managing
    scaling procedures. The Deployment, on the other hand, focuses on overseeing updates and managing rollbacks. 
    ReplicaSets often remain unnoticed in the architecture, even though
    they play a vital role in ensuring the stability and resilience of
    the system. Therefore, ReplicaSets can be considered the unsung heroes of Kubernetes, with Deployments often receiving
    most of the attention and recognition. The provided image
    illustrates the architecture with ReplicaSets operating behind the scenes.
    </p>
    <br />
    <h2>Update and Rollback</h2>
    <p>
    In the Kubernetes environment, the Deployment object is crucial for managing updates
    and rollbacks, ensuring the desired application state. Let's walk through the process of
    replica management and rollbacks:
    <ol style={{ margin: '10px' }}>
      <li>
        We commence by creating a Deployment YAML file, which outlines the desired state of the application.
      </li>
      <li>
        The file is then posted as a request to the API server, where it is authenticated, authorized, and any associated policies are checked and applied.
      </li>
      <li>
        The configuration is stored in the cluster store as a record of the desired state,
        followed by the scheduling of the requested Pods (for example, five Pods) to
        nodes within the cluster. Concurrently, a ReplicaSet controller operates in the
        background, continually ensuring the presence of the specified number of Pods
        (the blue ones) with the right specifications.
      </li>
      <li>
        When an update, such as a new image or application update, is required, changes are made to the same Deployment YAML file.
      </li>
      <li>
        This modified file is posted back to the API server
      </li>
      <li>
        In the background, Kubernetes creates a new ReplicaSet (the green ones), 
        simultaneously scaling up the new ReplicaSet and scaling down the old one, resulting
        in a seamless rolling update.
      </li>
    </ol>
    <img src={deploymentUpdate} className="images" alt="deploymentUpdate" />
    It is important to note that all old ReplicaSets are retained in the background. Even
    though they may not be managing any Pods, their presence enables easy reversion to
    previous versions, making them invaluable for rollbacks. This practice facilitates the
    maintenance of system stability during application updates and provides a safety net
    in case of any undesirable outcomes.
    </p>
    <br />
    <h2>Deployment YAML File</h2>
    <p>
      The K8s Deployment YAML file serves as the blueprint for how applications should be deployed and managed within a Kubernetes cluster.
      <img src={deploymentCode} className="images" alt="deploymentCode" />
      An essential element is the replicas field, which dictates the number of Pods to be created 
      and maintained in this deployment. This field is crucial for achieving desired redundancy 
      and load balancing needs. Another key feature in this section is the label selectors 
      ({'spec>selector>matchLabels'}). These labels play a pivotal role in identifying which
      Pods fall under the management of this deployment. It is crucial to ensure that these
      labels match the labels under the Pod template ({'spec>template>metadata>labels'}) to
      facilitate the correct association between the deployment and the Pods. This alignment
      allows the deployment to correctly manage operations such as scaling and rolling up dates.
    </p>
  </div>
  );
}

export default Deployment;
