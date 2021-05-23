import { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositorySearch = () => {
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const [term, setTerm] = useState("");

  const searchRepositoryHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={searchRepositoryHandler}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h2>{error}</h2>}
      {loading && <h2>Loading...</h2>}
      {!error && !loading && data.map((d) => <div key={d}>{d}</div>)}
    </div>
  );
};

export default RepositorySearch;
