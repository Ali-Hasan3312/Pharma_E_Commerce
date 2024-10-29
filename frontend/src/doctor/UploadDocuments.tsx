import { ChangeEvent, DragEvent, useState } from 'react';
import { MdCloudUpload } from "react-icons/md";
const UploadDocuments = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      setFile(selectedFile || null);
    };
  
    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const droppedFile = event.dataTransfer.files[0];
      setFile(droppedFile);
    };
  
    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    };
  
    const handleSubmit = () => {
      if (file) {
        console.log('File uploaded:', file);
        // Handle file submission logic (e.g., API call)
      } else {
        alert('Please upload a file before sending.');
      }
    };
  
  return (
    <div className="flex flex-col mt-8 items-center space-y-4 p-6">
        <div
          className="w-[70%] h-40 border-2 border-dashed border-dark-green rounded-lg flex flex-col justify-center items-center bg-gray-50 hover:bg-gray-100"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="text-5xl text-dark-green mb-2">
            <MdCloudUpload />
          </div>
          <p className="text-gray-600">Upload Your Documents Here</p>
          <label htmlFor="fileInput" className="text-dark-green underline cursor-pointer">
            Choose a file
          </label>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <button
          className="bg-dark-green text-white py-2 px-6 rounded-md hover:bg-opacity-70"
          onClick={handleSubmit}
        >
          Upload
        </button>
      </div>
  )
}

export default UploadDocuments