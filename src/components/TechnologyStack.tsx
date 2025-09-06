"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Raleway } from "next/font/google";

// ✅ Import Google Font
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const techStack = [
  {
    layer: "Frontend",
    images: [
      { src: "/techStack/react.png", name: "React.js" },
      { src: "/techStack/next.png", name: "Next" },
      { src: "/techStack/html5.png", name: "HTML5" },
      { src: "/techStack/css3.png", name: "CSS3" },
      { src: "/techStack/tailwind.png", name: "Tailwind" },
      { src: "/techStack/bootstrap.png", name: "Bootstrap" },
      { src: "/techStack/typescript.png", name: "Typescript" },
    ],
  },
  {
    layer: "Backend",
    images: [
      { src: "/techStack/node.png", name: "Node.js" },
      { src: "/techStack/dotnet.png", name: ".NET Core" },
      { src: "/techStack/springboot.png", name: "Spring Boot" },
      { src: "/techStack/fastapi.png", name: "FastAPI" },
      { src: "/techStack/django.png", name: "Django" },
    ],
  },
  {
    layer: "Mobile",
    images: [
      { src: "/techStack/flutter.png", name: "Flutter" },
      { src: "/techStack/reactnative.png", name: "React Native" },
      { src: "/techStack/kotlin.png", name: "Kotlin" },
      { src: "/techStack/swift.png", name: "Swift" },
    ],
  },
  {
    layer: "APIs & Integration",
    images: [
      { src: "/techStack/rest.png", name: "REST" },
      { src: "/techStack/graphql.png", name: "GraphQL" },
      { src: "/techStack/websocket.png", name: "WebSockets" },
      { src: "/techStack/swagger.png", name: "Swagger" },
      { src: "/techStack/postman.png", name: "Postman" },
    ],
  },
  {
    layer: "Database",
    images: [
      { src: "/techStack/postgres.png", name: "PostgreSQL" },
      { src: "/techStack/mongo.png", name: "MongoDB" },
      { src: "/techStack/mysql.png", name: "MySQL" },
      { src: "/techStack/redis.png", name: "Redis" },
      { src: "/techStack/oracle.png", name: "Oracle DB" },
    ],
  },
  {
    layer: "DevOps & CI/CD",
    images: [
      { src: "/techStack/docker.png", name: "Docker" },
      { src: "/techStack/kubernetes.png", name: "Kubernetes" },
      { src: "/techStack/jenkins.png", name: "Jenkins" },
      { src: "/techStack/githubactions.png", name: "GitHub Actions" },
      { src: "/techStack/gitlab.png", name: "GitLab CI" },
    ],
  },
  {
    layer: "Cloud Platforms",
    images: [
      { src: "/techStack/azure.png", name: "Azure" },
      { src: "/techStack/aws.png", name: "AWS" },
      { src: "/techStack/oraclecloud.png", name: "Oracle Cloud" },
      { src: "/techStack/gcp.png", name: "GCP" },
    ],
  },
  {
    layer: "Security & Auth",
    images: [
      { src: "/techStack/oauth.png", name: "OAuth2.0" },
      { src: "/techStack/jwt.png", name: "JWT" },
      { src: "/techStack/saml.png", name: "SAML" },
      { src: "/techStack/keycloak.png", name: "Keycloak" },
      { src: "/techStack/vault.png", name: "Vault" },
    ],
  },
  {
    layer: "Monitoring & Logs",
    images: [
      { src: "/techStack/elk.png", name: "ELK Stack" },
      { src: "/techStack/prometheus.png", name: "Prometheus" },
      { src: "/techStack/grafana.png", name: "Grafana" },
      { src: "/techStack/azuremonitor.png", name: "Azure Monitor" },
      { src: "/techStack/splunk.png", name: "Splunk" },
    ],
  },
];

export default function TechnologyStack() {
  const [activeLayer, setActiveLayer] = useState(0);

  const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className={`relative py-16 sm:py-20 bg-white backdrop-blur-xl border-t border-white/20 ${raleway.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
            Technology <span className="text-[#5AD6FF]">Stack</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-[#5AD6FF] rounded-full mb-10 sm:mb-12 mx-auto md:mx-0"
          ></motion.div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start mb-10">
          <button
            onClick={() => setActiveLayer(-1)}
            className={`px-3 sm:px-5 py-2 rounded-full border transition text-xs sm:text-sm font-medium ${
              activeLayer === -1
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          {techStack.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveLayer(index)}
              className={`px-3 sm:px-5 py-2 rounded-full border transition text-xs sm:text-sm font-medium ${
                activeLayer === index
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {item.layer}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeLayer === -1 ? (
          // Show all layers with headings
          <div className="space-y-12">
            {techStack.map((layer, layerIdx) => (
              <motion.div
                key={layerIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: layerIdx * 0.1 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">
                  {layer.layer}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {layer.images.map((tech, idx) => (
<div
  key={idx}
  className="flex flex-col items-center justify-center h-28 sm:h-32 rounded-full bg-white/50 backdrop-blur-md shadow-md px-6 py-3"
>
  <img
    src={tech.src}
    alt={tech.name}
    className="h-10 sm:h-14 object-contain mb-2"
  />
  <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">
    {tech.name}
  </p>
</div>
  
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Slider for single layer
          <motion.div
            key={activeLayer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Slider {...sliderSettings}>
              {techStack[activeLayer].images.map((tech, idx) => (
                <div key={idx} className="px-2 sm:px-4">
                  <div className="flex flex-col items-center justify-center h-32 sm:h-40 rounded-xl bg-white/50 backdrop-blur-md shadow-md p-3 sm:p-4">
                    <img
                      src={tech.src}
                      alt={tech.name}
                      className="h-12 sm:h-16 object-contain mb-2"
                    />
                    <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">
                      {tech.name}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        )}
      </div>
    </section>
  );
}
