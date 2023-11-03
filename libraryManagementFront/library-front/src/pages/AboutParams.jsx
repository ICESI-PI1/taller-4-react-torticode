import { useParams } from "react-router"

function AboutParams() {
   let  {id} =  useParams();  
  return (
    <div>About Author: {id}</div>
  )
}

export default AboutParams