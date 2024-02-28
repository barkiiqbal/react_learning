import React, { useEffect, useRef } from "react";


const ChildFuncIqbal = (props) => {
    const [name, setName] = React.useState("qasim");
    const prevProps = useRef(props);

    useEffect(() => {
        
        console.log("func componentDidMount called");
        
        setName("qasim componentDidMount");
        return () => {
            prevProps.current = props;
            console.log("func componentWillUnmount called");
        }
    },[props.num]);

    console.log("prevProps", prevProps.current);

    return(
        console.log("func render called"),
        <div>
            <h1>function component {props.num}</h1>
            <h1>name {name}</h1>
        </div>
    );
}

export default ChildFuncIqbal;