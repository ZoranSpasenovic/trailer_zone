import Select from "react-select";
import { seriesGenresMap, movieGenresMap } from "../../constants/genres";
import { useContentStore } from "../../store/content";

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "#330022",
    cursor: "pointer",
    borderRadius: "8px",
    minWidth: "200px",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#1a0011",
    borderRadius: "8px",
    overflow: "hidden",
    zIndex: "99",
  }),
  menuList: (base) => ({
    ...base,
    borderRadius: "8px",
    padding: 0,
    maxHeight: "200px",
    overflowY: "auto",
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#330022" : "#1a0011",

    cursor: "pointer",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#1a0011",
    borderRadius: "6px",
    padding: "2px 6px",
    minWidth: "100px",
    display: "flex",
    justifyContent: "space-between",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "FFD700",
    fontWeight: "bold",
    fontSize: "0.85rem",
  }),
  multiValueRemove: (base) => ({
    ...base,

    ":hover": {
      backgroundColor: "#880055",
      color: "white",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
    alignItems: "center",
  }),
  clearIndicator: () => ({
    display: "none",
  }),
};

const SelectComponent = ({ setSelectedGenres }) => {
  const { contentType } = useContentStore();

  const genreOptions =
    contentType === "movie"
      ? Object.entries(movieGenresMap).map(([id, name]) => ({
          value: id,
          label: name,
        }))
      : Object.entries(seriesGenresMap).map(([id, name]) => ({
          value: id,
          label: name,
        }));

  return (
    <Select
      isClearable
      isMulti
      styles={customStyles}
      options={genreOptions}
      classNamePrefix="custom-select"
      onChange={(selectedOptions) =>
        setSelectedGenres(selectedOptions.map((opt) => opt.value))
      }
      placeholder="Select genres"
    />
  );
};

export default SelectComponent;
