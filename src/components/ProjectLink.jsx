
import { Infoproject } from "./Infoproject";
import {projects} from '../projects/list'

const ProjectLink = ({ projecto }) => {
  return (
 
    <div
    style={{
      borderLeft: "1px solid #22577E",
      paddingLeft: "10px",
    }}
  >
    <div>
      <img
        className="imgProject"
        style={{
          width: "100%",
          objectFit: "cover",
          height: "400px",
          borderRadius: "15px",
        }}
        src={projecto.image}
      />
    </div>
    <div className="pProject">
      <p>
       {projecto.description}
      </p>
      <a href={projecto.git}>
        <img
          style={{
            width: "40px",
            marginTop: "10px",
            margin:' 0 30px'
          }}
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="git"
        />
      </a>
      <a href={projecto.image}>
        <img
          style={{
            width: "40px",
            marginTop: "10px",
          }}
          src="https://img.icons8.com/pastel-glyph/344/internet-browser--v1.png"
          alt="git"
        />
      </a>
    </div>
  </div>
  )
}
 
  

export default ProjectLink;
