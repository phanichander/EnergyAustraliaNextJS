import { useEffect, useState } from 'react'

import { FestivalList } from '@/components/FestivalList';
import { NO_DATA, PAGE_TITLE } from '@/constants/displayMessage';
import { AUST_FESTIVALS_API } from '@/constants';

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(AUST_FESTIVALS_API)
      const data = await response.json();

      setData(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1> {PAGE_TITLE} </h1>
      
      {!Boolean(data.length) ?
        <FestivalList data={data} />
      :
        NO_DATA
      }
    </>
  )
}

export default Home;
