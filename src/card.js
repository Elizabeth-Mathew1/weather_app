import './card.css';
import climage from './bgpic.jpg';
function Card({isapi,propData,data,tempmax,climate,term})
{
    const ktof=(k) => {
        return(k-273.15).toFixed(2);

    }
    return(
       
        <div className="card">
        { isapi && <img
              src={propData}
              alt="weather status icon"
              className="weather-icon"
            />}
        <div className="container">
            <span>
            <h3><b>{term}</b></h3>
            <br/>
            Avg.Temp: <b>{ ktof(data) }&deg; C</b>
            <br/>
            Feels like: <b>{ ktof(tempmax) }&deg; C</b>
            <br/>
            Climate: <b>{ climate }</b>
            </span>
        </div>
        </div>
    );
}
export default Card;