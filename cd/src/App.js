
const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} yo</p>
    </div>
  )
}

const App = () =>{
  const name ='je'
  const age = 19
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age="90"/>
      <Hello name={name} age= {age}/>
    </div>
  );
 }


export default App;
