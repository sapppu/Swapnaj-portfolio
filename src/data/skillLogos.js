const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const SIMPLE = 'https://cdn.simpleicons.org';

/** Map skill names to logo URLs (Devicon or Simple Icons) */
export const skillLogoMap = {
  Java: `${DEVICON}/java/java-original.svg`,
  'Core Java': `${DEVICON}/java/java-original.svg`,
  JavaScript: `${DEVICON}/javascript/javascript-original.svg`,
  TypeScript: `${DEVICON}/typescript/typescript-original.svg`,
  Python: `${DEVICON}/python/python-original.svg`,
  'C++': `${DEVICON}/cplusplus/cplusplus-original.svg`,
  C: `${DEVICON}/c/c-original.svg`,
  OOP: `${DEVICON}/java/java-original.svg`,
  'Spring Boot': `${DEVICON}/spring/spring-original.svg`,
  'Spring Security': `${DEVICON}/spring/spring-original.svg`,
  'Spring Data JPA': `${DEVICON}/spring/spring-original.svg`,
  'Hibernate ORM': `${DEVICON}/hibernate/hibernate-original.svg`,
  NestJS: `${DEVICON}/nestjs/nestjs-plain.svg`,
  'Node.js': `${DEVICON}/nodejs/nodejs-original.svg`,
  'REST API': `${SIMPLE}/openapiinitiative/8B5CF6`,
  'MVC Architecture': `${DEVICON}/spring/spring-original.svg`,
  Servlets: `${DEVICON}/java/java-original.svg`,
  JSP: `${DEVICON}/java/java-original.svg`,
  JDBC: `${DEVICON}/java/java-original.svg`,
  HTML5: `${DEVICON}/html5/html5-original.svg`,
  CSS3: `${DEVICON}/css3/css3-original.svg`,
  React: `${DEVICON}/react/react-original.svg`,
  'Next.js': `${DEVICON}/nextjs/nextjs-original.svg`,
  Bootstrap: `${DEVICON}/bootstrap/bootstrap-original.svg`,
  'Tailwind CSS': `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  Thymeleaf: `${SIMPLE}/thymeleaf/005F0F`,
  SQL: `${DEVICON}/mysql/mysql-original.svg`,
  MySQL: `${DEVICON}/mysql/mysql-original.svg`,
  PostgreSQL: `${DEVICON}/postgresql/postgresql-original.svg`,
  Django: `${DEVICON}/django/django-plain.svg`,
  Flask: `${DEVICON}/flask/flask-original.svg`,
  NumPy: `${SIMPLE}/numpy/013243`,
  Pandas: `${SIMPLE}/pandas/150458`,
  TensorFlow: `${DEVICON}/tensorflow/tensorflow-original.svg`,
  Git: `${DEVICON}/git/git-original.svg`,
  GitHub: `${DEVICON}/github/github-original.svg`,
  Docker: `${DEVICON}/docker/docker-original.svg`,
  Maven: `${DEVICON}/maven/maven-original.svg`,
  Gradle: `${DEVICON}/gradle/gradle-original.svg`,
  'IntelliJ IDEA': `${DEVICON}/intellij/intellij-original.svg`,
  'Eclipse IDE': `${DEVICON}/eclipse/eclipse-original.svg`,
  Postman: `${SIMPLE}/postman/FF6C37`,
  'Apache Tomcat': `${SIMPLE}/apachetomcat/F8DC75`,
  Linux: `${DEVICON}/linux/linux-original.svg`,
  'Linux (Red Hat, Ubuntu)': `${DEVICON}/linux/linux-original.svg`,
  'Shell Scripting': `${DEVICON}/bash/bash-original.svg`,
  'Raspberry Pi': `${DEVICON}/raspberrypi/raspberrypi-original.svg`,
  'Arduino UNO': `${DEVICON}/arduino/arduino-original.svg`,
  HTTP: `${SIMPLE}/httpie/007EC6`,
  HTTPS: `${SIMPLE}/letsencrypt/003A70`,
  'TCP/IP': `${SIMPLE}/cloudflare/F38020`,
  'LLM API Integration': `${SIMPLE}/openai/412991`,
  'Agentic AI Workflows': `${SIMPLE}/openai/412991`,
  'AI-Assisted Development': `${SIMPLE}/openai/412991`,
  'Prompt Engineering': `${SIMPLE}/openai/412991`,
  'Local Model Inference (LM Studio)': `${SIMPLE}/huggingface/FFD21E`,
  'REST API Design': `${SIMPLE}/openapiinitiative/8B5CF6`,
  MVCC: `${DEVICON}/postgresql/postgresql-original.svg`,
  'Query Planning': `${DEVICON}/postgresql/postgresql-original.svg`,
  'CRUD Operations': `${DEVICON}/mysql/mysql-original.svg`,
};

export function getSkillLogoUrl(skillName) {
  return skillLogoMap[skillName] ?? null;
}

export function skillsToLogoItems(skills) {
  return skills.map((title) => ({
    title,
    src: getSkillLogoUrl(title),
    alt: `${title} logo`,
  }));
}
