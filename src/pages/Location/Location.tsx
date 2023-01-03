import React,{ useEffect, useState } from "react"
import axios from "axios";
import './Location.css';
export function Location()
{
    const [data,setData]=useState<any[]>([]);
    useEffect(()=>{
        axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')

        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    })
const country=[...new Set(data.map(item=>item.country))];
country.sort();
        return(
        <div>
            <label>country:</label>
            <select className="dropdown">
                {country.map(items=><option key={items}>{items}</option>)}
            </select>
        </div>
    )
}