const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  const part1 = props.parts[0].name
  const exercises1 = props.parts[0].exercises
  const part2 = props.parts[1].name
  const exercises2 = props.parts[1].exercises
  const part3 = props.parts[2].name
  const exercises3 = props.parts[2].exercises
  return (
    <div>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </div>
  )
}

const Total = (props) => {
  const part1 = props.parts[0];
  const part2 = props.parts[1];
  const part3 = props.parts[2];

  const totalExercises = part1.exercises + part2.exercises + part3.exercises;

  return (
    <p>Number of exercises {totalExercises}</p>
  );
}


const App = () => {
  const course = {
    name:  'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
  ]}

  return (

    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App