import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'




const Main = () => {

  const navigate = useNavigate();
  const [pirates, setPirates] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/pirates")
      .then((response) => {

        console.log(response.data)
        setPirates(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  // SHOWPIRATE_AND_UPDATE

  const showOnePirate = (pirateID) => {
    console.log(pirateID)
    navigate("/pirate/" + pirateID)
  }

  // DELETE_ROUTE

  const goToDelete = (deleteID) => {

    axios.delete("http://localhost:8000/api/Pirates/" + deleteID + "/delete")
      .then(response => {
        console.log("DELETED SUCCESSFELY", response.data)
        setPirates(pirates.filter((pirate) => pirate._id !== deleteID))
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="container col-6 "  >
      <div className="but_Title">
        <h1>PIRATE CREW</h1>

      </div>
      <button className="btn btn-success"><Link style={{ textDecoration: "none", color: "white" }} to={"/pirate/new"} > Add Pirate </Link></button>

      {pirates.map((onePirate) => {
        return (


          <div className="item" key={onePirate._id}>
            <div>

              <h2 >{onePirate.name}</h2>
              <div>
                <img src={onePirate.image} alt={onePirate.image} width="130" height="130" />

                <button className="btn btn-primary" onClick={() => showOnePirate(onePirate._id)}>View Pirate</button>
                <button className="btn btn-danger" onClick={() => goToDelete(onePirate._id)}>Walk the Plank</button>
              </div>

            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Main