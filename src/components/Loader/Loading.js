import React,{Component} from 'react'
import Loader from 'react-loader-spinner'


class Loading extends Component {

    render(){

  return(



    <div className="loaderclass">
                  <Loader 
          type="Circles"
          color="#ff6e57"
          height="200"	
          width="200"
       />

   </div>

  )
}

}


export  default Loading;