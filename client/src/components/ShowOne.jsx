import React from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react'
<link rel="stylesheet" href="App.css" />


const ShowOne = (props) => {


    const { id } = useParams();
    const [thisPirate, setThisPirate] = useState(null);

    // !!!! Il faut changer useState({}) ====> useState (null)  pour Que Loading.... soit active
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)

            .then((response) => {
                setThisPirate(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (

        <div  className="MainshowOne">

            {thisPirate ? (
                <>
                    <div >

                    </div>
                    <center> <h3 className="showOneTitle">   {thisPirate.name} </h3></center>
                    <div className="showOne">
                        <div className ="imgDis">
                            <img src={thisPirate.image} alt="" width="130" height="130" />
                        </div>




                        <div className="about">
                            <h3>About</h3>
                            <h5> Position:  {thisPirate.crewposition}</h5>
                            <p> Treasure: {thisPirate.treasure}</p>
                            <p> Peg Leg:    {thisPirate.pegleg ? "Yes" : "No"} </p>
                            <p> Eye Patch:   {thisPirate.eyepatch ? "Yes" : "No"}  </p>
                            <p> Hook Hand:     {thisPirate.hookhand ? "Yes" : "No"}  </p>

                        </div>

                    </div>

                </>
            ) : "Loading........"
            }

        </div>
    )

}
export default ShowOne