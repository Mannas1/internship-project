import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export function MyDropzone() {
    const [file, setFile] = useState([]);
    const [fileUrl, setFileUrl] = useState("");

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ 
        onDrop,
        accept: {
            'image/*': ['.png', '.jpeg', '.jpg', '.svg']
        }
    })

    return (
        <div {...getRootProps()} className='flex flex-col rounded-xl cursor-pointer border border-black p-7'>
            <input {...getInputProps()} />
            {
                fileUrl ? (
                    <div>
                        test 1
                    </div>
                ) : (
                    <div>
                        test 2
                    </div>
                )

            }
        </div>
    )
}