import React, { useState } from 'react'

export default function PreviewImage() {

    const [image, setImage] = useState(null);


    const handleFileChange = (event) => {

        const file = event.target.files[0];

        if (!file) return;


        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
        };

        reader.readAsDataURL(file);
    };
    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <h3>Preview: </h3>
            {image && <img src={image} alt="Preview" style={{ maxWidth: "500px", marginTop: "10px" }} />}
        </div>
    )
}
