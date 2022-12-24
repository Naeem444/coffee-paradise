import { useEffect , useState} from "react";
import axios from 'axios';

const useFetchedData= url=>{
    const [data, setData] = useState([]);

    const fetchData=()=>{

        axios.get(url)
        .then(response => setData(response.data))
        .catch(error => console.error(`Error Occured  ${error}`));

    }


    useEffect(()=>{
        fetchData();
    }, [])

    return [data, setData];


}

    
export default useFetchedData;