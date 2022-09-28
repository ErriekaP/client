/*<h1>CRUD APP</h1>

<div className="form">
<label>Movie Name:</label>
<input type="text"
 name="movieName"
 onChange={(e) =>{
  setMovieName(e.target.value);
 }}/>

<label>Review:</label>
<input 
type="text"
 name="review"
 onChange={(e) =>{
  setReview(e.target.value);
 }}/>

<button onClick={submitReview}>Submit</button>

{movieReviewList.map((val)=>{
  return (
  <h1>
    MovieName:{val.movieName} | Movie Review:{val.movieReview}
  </h1>
  );
})}

</div>*/