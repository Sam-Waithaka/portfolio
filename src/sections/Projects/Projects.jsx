import styles from './ProjectsStyles.module.css';
import ReactJS from '../../assets/react JS.jpg';
import school from '../../assets/school.jpg';
import BookMarks from '../../assets/BookMarks.jpg';
import blog from '../../assets/blog.jpg';
import ProjectCard from '../../common/ProjectCard'
import imageQuest from '../../assets/image_quest.jpeg'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ReactJS}
          link="https://github.com/Sam-Waithaka/portfolio"
          h3="Portfolio "
          p="This Portfolio project"
        />
        <ProjectCard
          src={imageQuest}
          link="https://imagequests.netlify.app/"
          h3="Image Quest "
          p="Unsplash API with Vanila JS"
        />
        <ProjectCard
          src={school}
          link="https://github.com/Sam-Waithaka/EduManage-Pro"
          h3="EduManage Pro"
          p="School System"
        />
        <ProjectCard
          src={BookMarks}
          link="https://github.com/Sam-Waithaka/Bookmarks.git"
          h3="Bookmarks"
          p="A social application"
        />
        <ProjectCard
          src={blog}
          link="https://github.com/Sam-Waithaka/The-Blog"
          h3="Blogo"
          p="Blog Application"
        />
      </div>
    </section>
  );
}

export default Projects;
