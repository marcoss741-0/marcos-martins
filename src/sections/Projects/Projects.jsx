import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projetos</h1>
        <div className={styles.projectsContainer}>
          <h3>
            Area de projetos ainda vazia mas logo meus trabalhos serão publicados
          </h3>
        </div>
      </section>
    </>
  );
}

export default Projects;
