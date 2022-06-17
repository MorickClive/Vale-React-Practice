import { useContext, useEffect } from "react";
import HookContext from "../../components/hooks/hookContext";

const JSBasic = () => {
	
	document.title = "Vale-React-Project: Fundamentals";
	useEffect(() => {
		console.log("rendered: " + document.title);
	}, []);
	
	const [context, setContext] = useContext(HookContext);

	return <div id="main">
			<div className="container">
				<h2>Javascript Fundamentals page</h2>
				<br />
				<p>Context: [ {context} ]</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
				<br />
				<p>Example text</p>
			</div>
		</div>
};

export default JSBasic;