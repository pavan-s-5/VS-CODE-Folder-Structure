import React, { useState } from "react";

const Folder = ({ handleInsertNode = () => {}, Folder_Data}) => {
  const [expand, setExpand] = useState(false);
  const [showInputFolder, setShowInputFolder] = useState({
    visible: false,
    isFolder: false,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation()
    setExpand(true)
    setShowInputFolder({
      visible:true,
      isFolder
    })
  }

  const onAddFolder = (e) => {
    if(e.keyCode === 13 && e.target.value){
      handleInsertNode(Folder_Data.id, e.target.value, showInputFolder.isFolder)
      setShowInputFolder({...showInputFolder, visible:false})
    }
  }



  if (Folder_Data.isFolder) {
    return (
      <div>
        <div className="folder-container" onClick={() => setExpand(!expand)}>
          <div>📂{Folder_Data.name}</div>
          <div>
            <button onClick={(e) => handleNewFolder(e,true)}>Folder+</button>
            <button onClick={(e) => handleNewFolder(e,false)}>File+</button>
          </div>
        </div>

        <div style={{display:expand? 'flex' : 'none'}}  className="inside">

        {showInputFolder.visible && (
          <div >
            <span>{showInputFolder.isFolder ? "📂" : "📄"}</span>
            <input
            style={{marginLeft :'5px'}}
              type="text"
              autoFocus
              onBlur={() =>setShowInputFolder({ ...showInputFolder, visible: false })}
              onKeyDown={onAddFolder}
            />
          </div>
        )}

        {Folder_Data.items.map((element) => {
          return <Folder handleInsertNode={handleInsertNode} Folder_Data={element} key={element.id} />;
        })}
        </div>

      </div>
    );
  } else {
    return <span>📄{Folder_Data.name} </span>;
  }
};

export default Folder;
