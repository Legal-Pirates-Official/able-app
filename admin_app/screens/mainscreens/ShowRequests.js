import { View, Text } from 'react-native'
import React,{useEffect,useState} from 'react'
import { getRequest } from '../../axios/meet'

const ShowRequests = () => {
    const [data,setData] = useState()
    const [crtData,setCrtData] = useState([])
    useEffect(()=>{
        getRequest().then(res=>{
            setData(res)
            console.log(res,'ll');
        })
        console.log('====================================');
        console.log(data,'s');
        console.log('====================================');
        
    },[])
    var json
        data && data.map(item=>{
            console.log(item,'j');
            json = JSON.parse(item)
            setCrtData()

        })
  return (
    <View>
      <Text>ShowRequests</Text>
    </View>
  )
}

export default ShowRequests