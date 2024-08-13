/* Componente Header de Ejercicio 1.1 */
const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.curso}</h1>
    </>
  )
}

/* Componente Content de Ejercicio 1.1
const Content = (props) => {
  console.log(props)
  return (
    <>  
      <p>  
        {props.parte1} {props.ex1}
      </p>
      <p>
        {props.parte2} {props.ex2}
      </p>
      <p>
        {props.parte3} {props.ex3}
      </p>
      <br></br>
    </>
  )
}
*/
/* Componente Content de Ejercicio 1.2
const Content = (props) => {
  console.log(props)
  return(
    <>
      <Parte parte={props.parte1} ex={props.ex1} />
      <Parte parte={props.parte2} ex={props.ex2} />
      <Parte parte={props.parte3} ex={props.ex3} />
      <br></br>
    </>
  )
}
*/
/* Componente Content de Ejercicio 1.3
const Content = ({part1, part2, part3}) => {
  console.log({part1, part2, part3})
  return(
    <>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
      <br></br>
    </>
  )
}
*/
/* Componente Content de Ejercicio 1.4 */
const Content = ({parts}) => {
  console.log({parts})
  return(
    <>
      <p>{parts[0].name} {parts[0].exercises}</p>
      <p>{parts[1].name} {parts[1].exercises}</p>
      <p>{parts[2].name} {parts[2].exercises}</p>
      <br></br>
    </>
  )
}

/* Componente Parte de Ejercicio 1.2
const Parte = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.parte} {props.ex}
      </p>
    </>
  )
}
*/
/* Componente Total de Ejercicio 1.1
const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>
        Number of exercises {props.ex1 + props.ex2 + props.ex3} 
      </p>
    </>
  )
}
*/
/* Componente Total de Ejercicio 1.3
const Total = ({part1, part2, part3}) => {
  console.log({part1, part2, part3})
  return (
    <>
      <p>
        Number of exercises {part1.exercises + part2.exercises + part3.exercises} 
      </p>
    </>
  )
}
*/
/* Componente Total de Ejercicio 1.4 */
const Total = ({parts}) => {
  console.log({parts})
  return (
    <>
      <p>
        Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises} 
      </p>
    </>
  )
}

/* Componente App de Ejercicio 1.1
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header curso={course} />

      <Content 
        parte1={part1} 
        ex1={exercises1} 
        parte2={part2}
        ex2={exercises2}
        parte3={part3}
        ex3={exercises3} />

      <Total 
        ex1={exercises1} 
        ex2={exercises2}
        ex3={exercises3} />

    </>
  )
}
*/
/* Componente App de Ejercicio 1.3 
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header curso={course} />

      <Content part1={part1} part2={part2} part3={part3}/>

      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}
*/
/* Componente App de Ejercicio 1.4 */
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  ]

  return (
    <div>
      <Header curso={course} />

      <Content parts={parts} />

      <Total parts={parts} />
    </div>
  )
}

export default App