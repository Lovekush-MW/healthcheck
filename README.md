# 🩺 Healthcheck Application – AWS ECS Deployment & CI/CD

A lightweight Healthcheck API deployed using Docker, AWS ECS Fargate, GitHub Actions CI/CD, CloudFront HTTPS, and uptime monitoring to ensure secure, reliable, and automated deployments.

## 🎯 Project Objective

The goal of this project was to design and implement a production-ready deployment pipeline for a containerized application using AWS-managed services, focusing on automation, security, scalability, and zero-downtime releases.

---

## 🔗 Live Application Endpoints

### ✅ ECS / Container Endpoint (HTTP)
http://13.203.158.149:4000/health


### 🔒 CloudFront HTTPS Endpoint
https://d3hxnw91ongfzy.cloudfront.net/health


---

## 🚀 Deployment Architecture

- **Application:** Node.js Healthcheck API  
- **Containerization:** Docker  
- **Orchestration:** AWS ECS (Fargate)  
- **CI/CD:** GitHub Actions  
- **Security:** Non-root container user, HTTPS via CloudFront  
- **Monitoring:** UptimeRobot  


  - **Why ECS Fargate:** Eliminates server management, enables faster deployments, improves security isolation, and supports automatic scaling.

---

## ▶️ Run Locally

```bash
docker build -t healthcheck-app .
docker run -p 4000:4000 healthcheck-app

Access locally:
http://localhost:4000/health

## 🔄 GitHub Actions CI/CD Pipeline

A fully automated CI/CD pipeline is implemented using **GitHub Actions** to deploy the application on AWS ECS.

### Pipeline Workflow
- Triggered on every push to the `master` branch
- Builds Docker image
- Pushes image to Amazon ECR
- Renders a new ECS task definition
- Deploys the updated task to ECS with zero downtime
- Invalidates CloudFront cache to serve the latest version immediately

<img width="465" height="235" alt="CI pipeline" src="https://github.com/user-attachments/assets/8397cf64-43c9-4c76-85c5-e4fc62ec7d7f" />
<img width="304" height="172" alt="job runs dec 2" src="https://github.com/user-attachments/assets/5b2c0557-bf3b-4377-a51c-81bd62c448f1" />


### Benefits
- Automated and repeatable deployments  
- Faster release cycles  
- Reduced manual errors  
- Consistent production updates  

---

## 🌐 Port Mapping & Public Availability

- Application runs on **port 4000** inside the container
- Container port `4000` is correctly mapped and exposed
- AWS Security Groups allow inbound traffic on port `4000`
- Public accessibility verified via browser and monitoring tools

  <img width="656" height="134" alt="local ec2 work_together" src="https://github.com/user-attachments/assets/ef12c323-abbe-4a43-b95b-4a9d1dc4689d" />


---

## 🔐 Security Enhancements

### Non-Root Container Execution
- Application runs using a dedicated non-root user **`healthuser`**
- Reduces container attack surface
- Aligns with Docker security best practices

    <img width="473" height="100" alt="non root user" src="https://github.com/user-attachments/assets/488dc7fe-199a-4a6f-9815-f5d9fc381b36" />


### HTTPS via CloudFront
- CloudFront distribution configured in front of ECS
- HTTP traffic automatically redirected to HTTPS
- Encrypted communication without managing servers or certificates
-  HTTPS enabled using CloudFront with AWS-managed certificates (no custom domain required)

---

## 🧠 Zero-Downtime Deployments

- ECS service configured with:
  - `minimumHealthyPercent = 100`
  - `maximumPercent = 200`
- Existing tasks continue serving traffic until new tasks become healthy
- Zero downtime verified by continuously accessing the live URL during deployments

---

## 📊 Monitoring with UptimeRobot

- Health endpoint monitored continuously using **UptimeRobot**
- Regular HTTP health checks configured
- Uptime monitoring configured using UptimeRobot (free tier)
- Confirms application uptime and reliability

    <img width="665" height="296" alt="Uptime robot" src="https://github.com/user-attachments/assets/67680046-6bd4-4573-9957-8f1d41ffa534" />
    <img width="576" height="417" alt="ECS on uptimeRobot" src="https://github.com/user-attachments/assets/b0a5ef83-cecf-44e1-8609-22574cf60f22" />


---

## 🐳 Docker Image Versioning

- Docker images versioned through Git workflow
- Images tagged using commit-based identifiers
- Enables traceability and rollback to stable versions
- Prevents accidental overwrites caused by `latest` tag usage

   <img width="335" height="273" alt="versioned image" src="https://github.com/user-attachments/assets/bac0688c-59a6-43ee-a290-8e65d6d15a2e" />
   <img width="451" height="391" alt="re-run v  image" src="https://github.com/user-attachments/assets/9dcba3b5-73c8-40f9-9890-889c21ca2892" />

---

## 🏁 Project Completion

- All configurations documented
- CI/CD pipeline fully automated
- Security best practices implemented
- HTTPS enabled via CloudFront
- Zero-downtime deployment verified
- Uptime monitoring enabled

### 📌 Final Release Tag
`v1.0.0`

---

## 📌 Summary

This project demonstrates a **production-ready containerized application deployment** with:
- Automated CI/CD
- Secure container execution
- Cloud-native scalability
- HTTPS-enabled delivery
- Continuous uptime monitoring

---
