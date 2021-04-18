import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./Style.css";

const PaginationC = () => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const totalPages = Math.ceil(posts.length / postsPerPage);
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const handleChangePage = (event, newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<div>
			<table class="table table-striped">
				<thead class="thead-dark">
					<tr>
						<th>PAGINATION DATA</th>
					</tr>
				</thead>
				<tbody>
					{currentPosts.map((prev, i) => {
						return (
							<tr>
								<td key={i}> {prev.title} </td>
							</tr>
						);
					})}
				</tbody>
			</table>

			{/* PAGINATION START */}
			<div className="mt-4 d-flex justify-content-center align-items-center">
				<button
					className="sam_btn"
					disabled={currentPage === 1 && true}
					onClick={() => setCurrentPage(1)}
				>
					First
				</button>
				<Pagination
					shape="rounded"
					count={totalPages}
					onChange={handleChangePage}
					page={currentPage}
				/>
				<button
					className="sam_btn"
					disabled={currentPage === totalPages && true}
					onClick={() => setCurrentPage(totalPages)}
				>
					Last
				</button>
			</div>
			{/* PAGINATION END */}
		</div>
	);
};

export default PaginationC;
