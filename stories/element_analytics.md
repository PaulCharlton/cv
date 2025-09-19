## Dec 2017 – Aug 2019 — Element Analytics Inc — Principal Architect (IoT Edge-to-Cloud for Fortune 10 Oil & Gas)

At Element Analytics, I led the architecture and implementation of edge-to-cloud data systems for Fortune 10 oil & gas companies (BP, Shell, Chevron, and others). Each refinery or industrial facility contained ~100,000 sensors and control points, backed by more than 30 years of PI System time-series archives. My role combined hands-on architecture with executive advocacy, driving adoption of modern cloud-native and IoT practices across some of the world’s largest industrial operators.

### Core Contributions

- **Systems Architecture & Deployment**
    - Designed Kubernetes clusters from the ground up, implementing GitOps, semantic versioning, Helm charts, and both container/Helm registries.
    - All infrastructure was defined in YAML, enabling redundancy, multi-region, and multi-AZ resilience for global-scale IoT deployments.
    - Built a Terraform-equivalent engine powered by GitOps and semver for automated deployments, ensuring repeatability and security at scale.

- **Data Integration**
    - Unified real-time time-series data with process mechanical diagrams, control system topologies, and maintenance work orders.
    - Developed pipelines to splice, normalize, and enrich time-series streams with metadata about sensor replacement, component lifecycle, and maintenance history.
    - Enabled anomaly detection and predictive analytics spanning decades of historical and real-time operational data.

- **Digital Transformation Advocacy**
    - Acted as both technical architect and executive transformation advocate.
    - Presented and guided C-level and VP-level stakeholders at BP, Shell, Chevron in adopting cloud-native practices and IoT-based anomaly detection platforms.
    - Balanced deep technical execution with organizational change leadership.

- **Observability & Reliability**
    - Designed and deployed full observability stack with Datadog, StatsD, Grafana, and Prometheus.
    - Delivered enterprise visibility into data pipelines, deployments, and runtime operations.

- **Security & DevSecOps**
    - Embedded security into both CI/CD and runtime Kubernetes environments.
    - Automated vulnerability scanning, access controls, and compliance validation.
    - Deployed in Azure cloud with full security integration.

---

### Deep Dive: Apache Spark on Kubernetes

A critical breakthrough during my tenure was integrating **Apache Spark with Kubernetes** to support large-scale industrial workloads. Spark had not yet been natively adapted to Kubernetes, requiring fundamental architectural changes:

- **Cluster Manager Integration**
    - Extended Spark’s ClusterManager to submit, monitor, and manage drivers and executors as Kubernetes resources.
    - Allowed Spark jobs to run natively as Kubernetes pods, fully integrated with Kubernetes scheduling and lifecycle management.

- **Dynamic Resource Allocation**
    - Adapted Spark’s dynamic resource allocation to Kubernetes primitives (requests/limits).
    - Enabled Spark to elastically add/remove executor pods based on job demand, ensuring efficiency and avoiding idle resources.

- **Executor Lifecycle & Recovery**
    - Integrated Kubernetes native APIs to track pod lifecycle events and handle scheduling, failures, and interruptions.
    - Ensured Spark executors gracefully adapted to Kubernetes’ containerized model, managing memory/CPU dynamically.

- **Networking**
    - Rebuilt Spark’s networking for Kubernetes’ DNS-based service discovery.
    - Guaranteed reliable driver–executor communication across cluster nodes, regardless of topology changes.

- **Persistent Storage**
    - Modified Spark I/O to leverage Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs).
    - Built Helm chart bindings for interoperability with Hadoop filesystem resources.
    - Delivered reliable storage for temporary files, job checkpoints, and long-running workloads.

- **Logging & Monitoring**
    - Integrated Spark logging with Kubernetes-native tools like Fluentd.
    - Added Prometheus scraping via sidecar containers, enabling rich, real-time job observability.

- **Scheduling Optimizations**
    - Leveraged Kubernetes affinity/anti-affinity, node selectors, and tolerations to optimize executor placement.
    - Balanced workloads efficiently across heterogeneous cluster resources.

- **Unified Configuration**
    - Developed standardized Helm chart configurations for Spark/Kubernetes deployments.
    - Provided consistent property definitions across clusters, simplifying deployment and scaling.

---

### Impact

- **Industrial IoT Transformation**
    - Successfully instrumented over 30 facilities for Fortune 10 energy companies.
    - Delivered predictive maintenance, anomaly detection, and operational insights at unprecedented scale.
    - Established a model for cloud-native, secure, and observable IoT deployments in heavily regulated environments.

- **Technical Innovation**
    - Produced one of the earliest working integrations of Apache Spark with Kubernetes, enabling cloud-native elasticity, observability, and persistent storage for Spark jobs.
    - Pioneered techniques later adopted into upstream Spark/Kubernetes integrations.

- **Organizational Change**
    - Acted as a trusted transformation leader for global oil & gas executives.
    - Bridged deeply technical implementation with advocacy, ensuring adoption and long-term cultural shifts in IT/OT convergence.


Narrative:

How I Got Spark Running on Kubernetes

To get Apache Spark working well on Kubernetes, I had to make some changes to how Spark handles resources, networking, and storage. First, I started with Spark’s ClusterManager, adjusting it to submit, monitor, and manage applications as Kubernetes resources. This let the Spark driver and executors run as Kubernetes pods, which means they could fully interact with the Kubernetes system.

For scaling, I changed Spark’s dynamic resource allocation so it could grow or shrink the number of executor pods as job demands changed. By setting Kubernetes resource requests and limits, Spark could now add or remove executors automatically as needed, without wasting resources.

Executor management was a bit more complex. Spark’s executors had to adapt to Kubernetes’ pod lifecycles, which included handling scheduling and possible interruptions. I used Kubernetes’ native APIs to track pod statuses, recover from any failures, and manage memory and CPU resources, helping executors adjust to Kubernetes’ specific needs.

Next, I worked on networking. I changed Spark’s networking setup to work with Kubernetes’ DNS-based service discovery, allowing the Spark driver and executors to find and communicate with each other even when they were on different nodes in the cluster.

For storage, I modified Spark’s I/O paths so they could use Kubernetes’ Persistent Volumes (PVs) and Persistent Volume Claims (PVCs). This allowed Spark to store data reliably, like temporary files or job checkpoints, using Kubernetes’ storage options.  I also provided helm chart bindings which made it relatively easy to connect with existing Hadoop filesystem resources.

I also improved logging and monitoring by updating Spark’s logging system to work with Kubernetes tools like Fluentd, and I set up a sidecar container to allow Prometheus to scrape metrics. This made it easy to monitor Spark jobs directly in Kubernetes, giving a clear view of what was happening.

To manage where pods would run, I adjusted Spark’s scheduling rules to work with Kubernetes’ affinity and anti-affinity settings. By adding specific labels, node selectors, and tolerations, I could ensure executors were placed in the best spots in the cluster, using resources efficiently.

Finally, I customized Spark configurations for Kubernetes by defining a consistent set of spark related properties to the base helm chart for the Spark ecosystem.  This helped Spark and Kubernetes work together smoothly.

In the end, these changes made Spark integrate well with Kubernetes, allowing it to take advantage of Kubernetes’ scaling and resource management while keeping Spark’s powerful data processing features.

Let me know if you’d like more details on any part!

Best regards,
+Paul
