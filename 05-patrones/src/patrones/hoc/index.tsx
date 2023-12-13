import { useState, useEffect, ComponentType } from "react";

export default function loadData<T>(Component: ComponentType<T>, url: string) {
	return function (props: Omit<T, "data">) {
		const [data, setData] = useState(null);
		const [loading, setLoading] = useState(true);
		const [error, setError] = useState(null);
		useEffect(() => {
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setData(data);
					setLoading(false);
				})
				.catch((err) => {
					console.error(err);
					setError(err);
					setLoading(false);
				});
		}, []);

		if (loading) {
			return <div>Loading...</div>;
		}
		if (error) {
			return <div>Error: {error}</div>;
		}
		return <Component data={data} {...(props as T)} />;
	};
}
