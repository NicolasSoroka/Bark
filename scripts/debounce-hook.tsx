function useDebounce (value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [value, delay]);
  return debouncedValue;
};

const SearchCourse: React.FC<SearchInterface> = ({ fetchTableData }) => {
  const [searchValue, setSearchValue] = useState("");

  //aca se usa el debounce para obtener el valor que entra al fetch
  const queryDebouncedValue = useDebounce(searchValue, 300);

  useEffect(() => {
    // cada vez que cambie el searchValue, se ejecuta el fetch
    fetchTableData(queryDebouncedValue);
  }, [searchValue]);

  return (
    <Grid item style={{ paddingBottom: 5 }}>
      <TextField
        label="Course name"
        name="name"
        value={searchValue}
        onChange={ (e) => setSearchValue(e.target.value)}
        style={{ width: "220px" }}
        required
      />
    </Grid>
  );
};