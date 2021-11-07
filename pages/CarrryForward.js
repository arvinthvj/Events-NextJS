import React from 'react';
import { useRouter } from 'next/router'
import { useState , useEffect } from 'react';
import axios from "axios";



const https = require('https');
const baseUrl = "https://sscstrapi-uat.isdb.org";



export const getStaticProps = async () => {
    const instance = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    });
    const res = await instance.get('https://sscstrapi-uat.isdb.org/events');
    const data = await res.data
  
    return {
      props: { fetchedData: data }
    }
  }


function CarrryForward(props) {
    const [filteredData, setfilteredData] = useState([])
    useEffect(() => {
      let filteredById =  props.fetchedData.filter(o=>{
            return o.id == router.query.title
        })
        setfilteredData(filteredById)
    }, [])

    const router = useRouter()
  console.log(router.query);
    return (
        <div>
            {/* Id: {router.query.title} */}
            {filteredData.map(o=>(
                <>
                <label>Author</label>
                <h1>{o.Author}</h1>
                <label>Title</label>
                <h1>{o.Title}</h1>
                <label>Creation Date</label>
                <h1>{o.CreatedDate}</h1>
                <label>Location</label>
                <h1>{o.Location}</h1>
                <label>Description</label>
                <h1>{o.Description}</h1>
                <label>Speaker</label>
                <h1>{o.Speaker}</h1>
                <label>Start Date</label>
                <h1>{o.StartDate}</h1>
                <label>Type</label>
                <h1>{o.Type}</h1>
                <label>Image</label>
                {o.Image.map(f=>(
                    <>
                    <img src={baseUrl+f.url}></img>
                    </>
                ))}
                <a>{o.RegistrationLink}</a>
                </>
            ))}
        </div>
    );
}

export default CarrryForward;