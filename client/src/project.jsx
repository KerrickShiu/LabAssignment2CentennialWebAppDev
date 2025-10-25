import game from './bugsmashergame.png';
import visualization from './healthdatavisualization.png';
import app from './stackimplementationapp.png';
export default function Project() {
  return (
    <div>
      <h2>My Projects</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #000", padding: "8px" }}>Quick Bug Smasher Game using html, css, javascript.</td>
            <td style={{ border: "1px solid #000", padding: "8px" }}>
              <img src={game} alt="Bugsmasher game" length="960px" width="540px"/>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #000", padding: "8px" }}>Data Visualizaton project using Tableau Digital with a Healthcare Dataset</td>
            <td style={{ border: "1px solid #000", padding: "8px" }}>
              <img src={visualization} alt="Data Visualization" length="960px" width="540px" />
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #000", padding: "8px" }}>Stack Implementation App created using C#, OOP Principles and Winforms via Microsoft Visual Studio</td>
            <td style={{ border: "1px solid #000", padding: "8px" }}>
              <img src={app} alt="Stack Implementation App" length="524px" width="368px" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}