import React from 'react';
import '../App.css';
import nodeportCode from './Images/nodeport-code.jpg';
import lbCode from './Images/lb-code.jpg';



function Service() {
  return (
    <div className="App-body">
    <p>
      A Service is a REST object within the API, analogous to Pods, Nodes, and Deployments. These services are defined in YAML
      files, which are subsequently posted to the API server. Let's consider a scenario with multiple Pods, already deployed and
      operational. Despite the successful deployment of these Pods, a significant challenge remains; we lack a reliable method of
      connection. To mitigate this issue, a Service is introduced to oversee the group of Pods. It acts as an intermediary, ensuring
      a robust and reliable connection, despite the ephemeral nature of the Pods it manages.
      There are three primary service types in Kubernetes, each catering to a distinct set of requirements.
      <ul>
        <li>
          <b>ClusterIP:</b> This is the default service type, selected if no explicit type is provided. 
          It allocates a stable IP address within the cluster, making the service only
          accessible from within the cluster itself.
        </li>
        <li>
          <b>NodePort:</b> Building upon the ClusterIP, the NodePort service adds a cluster-wide 
          TCP or UDP port. This facilitates access to services from outside the cluster.
          It operates by exposing a certain port on each node, and any traffic that is sent
          to this port is forwarded to the associated service.
        </li>
        <li>
          <b>LoadBalancer:</b> This is the most sophisticated service type, which expands upon
          the functionalities of both ClusterIP and NodePort services. In addition to 
          providing an internal IP address and exposing a port across nodes, it allows your
          services to be exposed to the internet via the load balancer provided by your
          cloud platform.
        </li>
      </ul>
      It is important to note that when using LoadBalancer or NodePort services, there
      is no requirement to create a ClusterIP service or any other underlying service type
      beforehand.
    </p>
    <br />
    <h2>NodePort Service</h2>
    <h4>Creating NodePort Imperatively</h4>
    <p>
      Suppose a pod has been deployed that operates a web server. It is then essential to
      create a service and the most straightforward method to achieve this involves executing
      the following command: <b>kubectl expose pod poc-pod –name=poc-k8s-container
      –target-port=3000 –type=NodePort</b>. The target-port option is set to 3000, which
      aligns with the port that the container within the pod is designed to listen to and the
      type option is set to NodePort, which denotes the service's exposure at a static port
      on each node in the cluster. This aforementioned command employs an imperative
      approach, given that the kubectl expose command is directly creating the service. After
      the service has been successfully created, the command kubectl get services can be
      executed to display the list of services currently present within the cluster.
    </p>
    <h4>Creating NodePort Declaratively</h4>
    <p>
    Let's delve into an example of a Kubernetes Service manifest and its various components:
    <img src={nodeportCode} className="images" alt="nodeportCode" />
    <ul class="dashed-list">
      <li>
        <u>port:</u> This is the port on which the service will be listening within the cluster and
        is linked to the ClusterIP. If another application within the same cluster intends
        to connect using the service's name (which is registered with DNS), this is the
        port that will be used.
      </li>
      <li>
        <u>targetPort:</u> This refers to the port on which the application inside the container is listening.
      </li>
      <li>
        <u>nodePort:</u> This is the external port that will be mapped on every node within
        the cluster. Although an explicit value can be assigned, it must lie within the
        range of 30000 to 32767.
      </li>
      <li>
        <u>protocol:</u> We have defined it as TCP, which is the default setting. However, this
        could be omitted or replaced with UDP if necessary.
      </li>
      <li>
        <u>selector:</u> This involves a list of labels that need to correspond with the labels
        on the pod we previously deployed. To confirm this, the <b>kubectl get pods –show-labels</b> command can be used.
      </li>
    </ul>
    The service is deployed using the command <b>kubectl apply -f svc-nodeport.yml</b>,
    and like always, the <b>kubectl describe services poc-np</b> command is used subsequently. 
    This allows us to obtain a well-formatted view of the parameters defined
    within the YAML file.
    </p>
    <br />
    <h2>LoadBalancer Service</h2>
    <p>
      This step involves the creation of an internet-facing load balancer, featuring a high-performing 
      and highly reliable public IP address, to direct traffic back to our application, 
      which is running within a pod in our cluster. However, it's crucial to note that
      if the use of Docker Desktop, minikube, or similar platforms, this may not function as
      intended.
    </p>
    <p>
      As before, we will use a YAML configuration for this service. This time, the service
      type is specified as LoadBalancer. This LoadBalancer is configured to listen on port 80
      and route the incoming traffic to the application listening on port 3000. As previously,
      the selectors used should be aligned with those of the pods we have already created.
    </p>
    <img src={lbCode} className="images" alt="lbCode" />
    <p>
      Upon executing the command <b>kubectl apply -f svc-loadbalancer.yml && kubectl
      get services</b>, our LoadBalancer service will be created and listed, along with a public
      IP address assigned to it.
    </p>
  </div>
  );
}

export default Service;
