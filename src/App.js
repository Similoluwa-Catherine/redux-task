import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCovidData} from "./store/data.action"

const App = () => {
  const {data} = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData())
  }, [dispatch]);

  
  return (
    <div className="container-fluid p-5">
        <h3 className="text-center mb-4">COVID DATA</h3>
        <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                      <th>STATE ID</th>
                      <th>STATE</th>
                      <th>CONFIRMED CASES</th>
                      <th>CASES ON ADMISSION</th>
                      <th>DISCHARGED</th>
                      <th>DEATH</th>
                    </tr>
                </thead>
                <tbody>
                {data && data.states.map((stateData, index) => {
                  return (
                    <tr key={index}>
                      <td>{stateData._id}</td>
                      <td>{stateData.state}</td>
                      <td>{stateData.confirmedCases}</td>
                      <td>{stateData.casesOnAdmission}</td>
                      <td>{stateData.discharged}</td>
                      <td>{stateData.death}</td>
                    </tr>
                  )
                })}
                </tbody>
            </table>
        </div>
        <div>
          <h5 className="mt-4 text-decoration-underline">TOTAL DATA</h5>
          <ul className="list-unstyled">
            <li className="lh-lg">TOTAL SAMPLES TESTED:  {data?.totalSamplesTested}</li>
            <li className="lh-lg">TOTAL CONFIRMED CASES:  {data?.totalConfirmedCases}</li>
            <li className="lh-lg">TOTAL ACTIVE CASES:  {data?.totalActiveCases}</li>
            <li className="lh-lg">DISCHARGED:  {data?.discharged}</li>
            <li className="lh-lg">DEATH:  {data?.death}</li>
          </ul>
        </div>
    </div>
  );
}

export default App;
