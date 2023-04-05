import "./5_Keep.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const SaveNotes = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="SaveNotes">
        <h3>{props.title}</h3>
        <p>{props.content}</p>

        <button className="button" onClick={deleteNote}>
          <DeleteOutlineIcon className="deleteIcon" />
        </button>
      </div>
    </>
  );
};
