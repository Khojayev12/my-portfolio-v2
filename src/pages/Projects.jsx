import React from "react";
import Project from "../components/Project";
import Pro1 from "../projects/pro1.png";
import Pro2 from "../projects/pro2.png";
import Pro3 from "../projects/pro3.png";
import Pro4 from "../projects/pro4.png";
import Pro5 from "../projects/pro5.png";
import Pro6 from "../projects/pro6.png";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <>
      <div className="projects-page">
        <div className="projects-page-title"  data-aos="fade-right">Projects</div>
        <div className="projecfts-page-subtitle"  data-aos="fade-right">
          Websites I've built so far
        </div>

        <div className="project-group">
        <Project
            img={Pro1}
            title="SOS Game"
            description="This website is a landing page that advertices a video game call SOS. You are free to use this website on any device as it is fully responsive and user friendly."
            url="https://dg-sos-game.netlify.app/"
            code="https://github.com/Khojayev12/sos-game"
          />
          <Project
            img={Pro2}
            title="Khiva PS"
            description="This is website is an official website of the Presidential school in Khiva, this website shares news and other information about the shcool. It is also responsive."
            url="https://khivaps.netlify.app/"
            code="https://github.com/Khojayev12/khiva-ps"
          />
          <Project
            img={Pro3}
            title="Raqamli Avlod"
            description="This is a blog website that shares news about differen things. All news are categorised and can be accesed from any device as website is responsive."
            url="https://raqamliavlodblog.netlify.app/"
            code="https://github.com/Khojayev12/digital-generation"
          />
          <Project
            img={Pro4}
            title="TorrentFlix"
            description="This responsive and user friendly website can be used for downloading torrent movies. You can find any movie that you wuld like to watch in this website."
            url="https://torrent-flix.netlify.app/"
            code="https://github.com/Khojayev12/TorrentFlix"
          />
          <Project
            img={Pro5}
            title="Locus"
            description="This is sample website that advertices the services of an interior design agency. Website is a simple langing page and styled with minimalism."
            url="https://react-icons.github.io/"
            code="https://react-icons.github.io/"
          />
          <Project
            img={Pro6}
            title="Castaway"
            description="This is personal website of a person who has a podcast, and this website advertices that podcast on different platform."
            url="https://castaway-app.netlify.app/"
            code="https://github.com/Khojayev12/castaway"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
