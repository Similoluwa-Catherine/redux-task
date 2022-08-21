// import { useEffect } from "react";
// import { batch, useDispatch, useSelector } from "react-redux";
// import {getCovidData} from "./store/data.action";
// import App from "./App";

// const CovidData = () => {
//     const dispatch = useDispatch();
//     const {details} = useSelector(({dataReducer}) => ({
//       details: dataReducer,
//     }));
  
  
//     useEffect(() => {
//       batch(() => {
//         dispatch(getCovidData());
//       });
//     }, [dispatch]);


//     return (
//       <div className="page">
//         <App information={details.data}/>
//       </div>
//     )
//   }
  
//   export default CovidData;