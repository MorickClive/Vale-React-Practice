import { useContext, useEffect } from "react";
import HookContext from "../../components/hooks/hookContext";

const JSBasic = () => {
	
	useEffect(() => {
		document.title = "Vale-React-Project: Fundamentals";
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