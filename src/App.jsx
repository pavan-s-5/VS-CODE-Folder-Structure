
import './App.css'
import { useState } from 'react'
import Folder from './components/Folder'
import Folder_Data from './Data/FolderData'
import useTree from './hooks/useTree'


function App() {

  const [FolderData, setFolderData] = useState(Folder_Data)
  const {insertNode} = useTree()

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode (FolderData, folderId, item, isFolder)
    setFolderData(finalTree)
  }

  return (
   <div>
      <Folder 
        Folder_Data={FolderData}
        handleInsertNode={handleInsertNode}
      />
   </div>
  )
}

export default App
