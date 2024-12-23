const App = () => {

  const course = {
  name: 'Half Stack application development',
  parts: [ {
    name: 'Fundamentals of React',
    exercises: 10
  },

  {
    name: 'Using props to pass data',
    exercises: 7
  }

  ,{
    name: 'State of a component',
    exercises: 14
  }]}

  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  // const parts = [part1, part2, part3]
  // const exercises = [exercises1, exercises2, exercises3]

  const Header = (props) => {
    return (<><h1>{props.name}</h1></>)
  }

  const Part = (props) => {
    return (<><p>{props.name} {props.exercises}</p></>)
  }
 
  const Content = (props) => {  
    return (<>
    <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
    <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
    <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
  
    </>)
  }

 


  const Total = (props) => {
    return (<><p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p></>)
  }

  return (
    <>
    <Header name = {course.name} />
    <Content parts = {course.parts} />
    <Total parts = {course.parts} />
    </>
  )
}

export default App
