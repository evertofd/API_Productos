const Buscador = ({ search, setSearch }) => {
  return (
    <>
      <input onChange={(e) => setSearch(e.target.value)} value={search} />
    </>
  );
};

export default Buscador;
