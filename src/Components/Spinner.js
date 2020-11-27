import spinnerGif from "../Addons/spinner.gif";

const Spinner =  () =>{
    return(
        <div>
            <img src={spinnerGif} alt={"Loading...."} style={spinnerStyle}/>
        </div>
    );
}

const spinnerStyle = {
    width: "50px",
    margin: "auto",
    display: "block"
}

export default Spinner;
