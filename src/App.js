import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Courses from "./components/Courses";
import AddCourse from "./components/AddCourse";
import EditCourse from "./components/EditCourse";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/courses" component={Courses} />
				<Route exact path="/addCourse" component={AddCourse} />
				<Route exact path="/editCourse/:courseId" component={EditCourse} />
			</Switch>
		</Router>
	);
}

export default App;
