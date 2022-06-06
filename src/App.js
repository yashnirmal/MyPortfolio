import './App.css';
import React,{useState} from "react";
import First from './components/First';
import Third from './components/Third';
import Second from './components/Second';
import Scroll from './components/Scroll';
import Fourth from './components/Fourth';
// import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Resume from "./components/Resume";


// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

function App() {

  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   console.log("Here")
  //   setOpen(true);
  //   console.log(open);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // };


  return (
    <>
      <First />
      {/* <div style={{width:"100vw",height:"50vh"}} onClick={(e)=>{console.log("Cliked : "+e.target)}}></div> */}
      <Second />
      <Fourth handleClick={handleClick} />
      <Third />
      <Scroll />
      <Resume />

      {/* <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success">
          MailID is copied
        </Alert>
      </Snackbar> */}
    </>
  );
}

export default App;
