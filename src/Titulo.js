function Titulo(props){
    const {cor,children} = props;   //destructuring 
    return (
        <h1 
        /*
        string = "ola"
        numero = {123}
        objeto = {{
            rua:"Rua",
            numero:123,
        }}
        */
        
        style={{
            color:cor
        }} 
        > 
            {children}
        </h1>
    )
}

export default Titulo;