/* Componente Header de Ejercicio 1.1 */
const Header = (props) => {
  return (
    <>
      <h1>{props.curso}</h1>
    </>
  )
}

/* Componente Content de Ejercicio 1.1
const Content = (props) => {
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

/* Componente Content de Ejercicio 1.2 */
const Content = (props) => {
  return(
    <>
      <Parte parte={props.parte1} ex={props.ex1} />
      <Parte parte={props.parte2} ex={props.ex2} />
      <Parte parte={props.parte3} ex={props.ex3} />
      <br></br>
    </>
  )
}

/* Componente Parte de Ejercicio 1.2 */
const Parte = (props) => {
  return (
    <>
      <p>
        {props.parte} {props.ex}
      </p>
    </>
  )
}

/* Componente Total de Ejercicio 1.1 */
const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.ex1 + props.ex2 + props.ex3} 
      </p>
    </>
  )
}

/* Componente App de Ejercicio 1.1 */
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

export default App