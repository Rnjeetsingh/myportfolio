import "../styles/projects.css";
import "font-awesome/css/font-awesome.min.css";

function Projects() {
  return (
    <div id="projects" className="pages">
      <h1>Thing I've Developed</h1>

      <div className="card">
        <div className="imgBx">
          <img src="https://i.ibb.co/47Hw3Vj/poster-01.png" alt="" />
        </div>
        <div className="data">
          <h1 className="project-title">
            Clone of <span>"Movix"</span>
          </h1>
          <p className="project-description">
            The application is designed to keep track of movie titles, genres,
            directors, actors, and release date. The user interface is designed
            to be intuitive and user-friendly, with all the necessary tools for
            managing the database, such as search, filter, sorting.
          </p>
          <div className="lang">
            <span>React</span>
            <span>HTML</span>
            <span>JavaScript</span>
            <span>SCSS</span>
          </div>

          <div className="links">
            <a
              className="project-github-link"
              href="https://github.com/Rnjeetsingh/movix"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              className="project-deployed-link"
              href="https://ranjeetsingh-movixapp.netlify.app/"
            >
              <i className="fa fa-external-link"></i>
            </a>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="card">
        <div className="imgBx">
          <img
            src="https://i.ibb.co/hDKzc84/Screenshot-20230103-054519.png"
            alt=""
          />
        </div>
        <div className="data">
          <h1 className="project-title">
            Clone of <span>"Bewakoof"</span>
          </h1>
          <p className="project-description">
            Online Shopping Made Hassle-Free, Convenient & Super-Exciting With
            Bewakoof.com. Shop Now! All the Latest Trends are Just a Click Away!
            Easy Shopping, Secure Payments & Cool Offers. Free Shipping. Cash on
            Delivery. 15 Day Return Policy. Easy Returns.
          </p>
          <div className="lang">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="links">
            <a
              className="project-github-link"
              href="https://github.com/Arun-kumar-fw20-0202/-giving-scene-667"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              className="project-deployed-link"
              href="https://clinquant-baklava-8aec62.netlify.app/"
            >
              <i className="fa fa-external-link"></i>
            </a>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="card">
        <div className="imgBx">
          <img src="https://i.ibb.co/qF7r4DY/mailtrap.png" alt="" />
        </div>
        <div className="data">
          <h1 className="project-title">
            Clone of <span>"Mail Trap"</span>
          </h1>
          <p className="project-description">
            The application provides a secure sandbox environment for users to
            test their emails and preview the results in a safe, secure
            environment. Users can customize their own mailtrap.io accounts with
            features such as secure email delivery, message tracking, message
            security, and more.
          </p>
          <div className="lang">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          <div className="links">
            <a
              className="project-github-link"
              href="https://github.com/randomFrisby/Infinite-Mail"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              className="project-deployed-link"
              href="https://marvelous-starlight-49c422.netlify.app/"
            >
              <i className="fa fa-external-link"></i>
            </a>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
export default Projects;
