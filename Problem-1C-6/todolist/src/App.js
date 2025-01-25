
function App(props){
    return(
     <>
     <h1>Hello {props.name}</h1>
     {props.age ?(
     <h2>Age: {props.age}</h2>
     ):
     (<h2>Age Not Provided</h2>)}
     </>
    )
  }
export default App;