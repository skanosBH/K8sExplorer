import React from 'react';
import '../App.css';
import api from './Images/architecture-api.jpg';
import overview from './Images/architecture-overview.jpg';



function Architecture() {
  return (
    <div className="App-body">
    <h2>Overview</h2>
    <img src={overview} className="images" alt="overview" />
    <p>
      The initial architecture of our application consists of various individual services, each
      encapsulated within a distinct container. These services range from load balancers and
      web servers to logging systems, forming a comprehensive and diverse ecosystem. The
      orchestration of these services is facilitated by Kubernetes.
      The application is deployed in a Kubernetes-managed cluster, with <i>master nodes</i>controlling 
      scheduling and <i>worker nodes</i> running applications. For deployment, the application 
      code is containerized and encapsulated within a <i>pod</i> and further wrapped inside
      a deployment for enhanced functionalities. The application's specifications are detailed
      in a Kubernetes <i>YAML file</i>, which is given to the master node, showcasing the power
      of Kubernetes.
    </p>
    <br />
    <h2>Master</h2>
    <p>
      The masters, often referred to as the control plane or head nodes, represent the intelligence 
      of the Kubernetes cluster. Since they govern the operation of the cluster, ensuring 
      their constant availability is crucial. To maintain high availability, an odd number of 
      masters are utilized, and they are distributed across different failure domains linked by 
      robust, reliable networks. In most cases, three masters are deemed sufficient. Deploying 
      two masters is discouraged due to the potential risk of a split-brain condition and 
      deadlock.
    </p>
    <p>
      The master nodes, which must be Linux machines, can be located virtually anywhere and run multiple smaller services, each
      responsible for a single control plane feature. These master components can be managed by a user in a self-built cluster or
      hidden and managed by a cloud provider in a hosted Kubernetes platform. However, user applications should typically run
      on worker nodes, not on the masters, to ensure clean demarcation and simplicity.
    </p>
    <p>
      The master's key components include the API server, the cluster store, the 
      controller manager, and the scheduler. The API server is the gateway
      to the cluster and the medium through which commands are sent to the cluster. 
      The cluster store is the sole persistent component, storing the state and configuration of
      the cluster and apps. The controller manager oversees a variety of controllers 
      responsible for different cluster elements, and the scheduler assigns workloads to nodes while
      considering several factors for optimal distribution.
    </p>
    <br />
    <h2>Nodes</h2>
    <p>
      This section covers the fundamental aspects of Kubernetes nodes. The core components of interest are the <i>kubelet</i>, the 
      <i>container runtime</i>,and the <i>kube-proxy</i>.
      The kubelet is the primary Kubernetes agent running on each cluster node. Nodes,
      often referred to interchangeably with kubelets, begin as Linux or Windows machines.
      Once the kubelet is installed on a machine, it registers the machine as a node in the 
      cluster and integrates its CPU, RAM, and other resources into the total cluster resource
      pool. Tasks in a Kubernetes cluster are executed in the form of pods, which are one
      or more containers bundled together as a singular deployable unit. The kubelet's role
      includes maintaining consistent surveillance of the API server on the master for any
      newly assigned pods. Upon recognizing one, it retrieves the specifications and executes
      the pod. Furthermore, the kubelet also maintains a reporting channel back to the API
      server to keep the masters updated on the state of the cluster and any running applications.
      Container runtime is responsible for the execution of applications running in containers.
      Originally, Docker was the primary container runtime, but the component is pluggable
      via the Container Runtime Interface (CRI). Currently, Docker or containerd are most
      commonly used, but other compatible alternatives exist such as gVisor and Kata Containers.
      The kube-proxy serves as the network intellect of the node, assigning unique IP addresses to 
      each pod and performing lightweight load balancing across all pods behind
      a service.
    </p>
    <p>
      In addition, some cloud services offer nodeless Kubernetes, where there are no nodes.
      This paradigm can be quite advantageous from the developer and administration perspectives, 
      allowing one to bypass the complications of low-level infrastructure manage-
      ment. However, this can also be quite perplexing due to the seemingly contradictory
      nature of nodes being the platform where business applications actually run.
    </p>
    <br />
    <h2>Pods</h2>
    <p>
      In the VMware world, the atomic unit of deploying is the virtual machine; in the Docker
      world, it's the container and in the Kubernetes world, it's the Pod. A Pod is essentially
      a thin wrapper required by Kubernetes for every container and is technically defined as
      a <b>shared execution environment</b>. This shared environment comprises the necessary
      components for an application to function, such as an IP address, network port, file
      system, and shared memory.
    </p>
    <p>
      The Pod is the unit of scaling in Kubernetes. Scaling an application involves adding
      or removing Pods rather than adding more identical containers to an existing Pod. In
      terms of atomicity, Pod deployment is an all-or-nothing operation and is available for
      service only when all its containers are running. Furthermore, once created, they cannot
      be revived once they terminate: a new Pod, identical to the terminated one, is created
      instead of reviving the terminated Pod.
    </p>
    <br />
    <h2>API and API Server</h2>
    <p>
      Kubernetes, at its core, is an intricate assembly of autonomous components that collectively 
      provide the necessary infrastructure and features for deploying advanced cloud-native applications. 
      Pods, Services, Deployments, SatetfullSet, and much more are all 
      classified as an objects within the Kubernetes API, which essentially encompasses all
      elements, including nodes. For instance, to make a pod accessible over a network or the
      internet, a service object is employed. Each type of object comes with a suite of features
      and capabilities outlined within the API. The API server,considered as a key feature
      of the control plane, exposes the RESTful API over HTTPS. This server operates as a
      web-native API that supports common methods such as POST and GET for making
      updates and querying states.
    </p>
    <img src={api} className="images" alt="api" />
  </div>
  );
}

export default Architecture;