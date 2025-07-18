export const uploadToCloudinary = async (pics, fileType) => {
  if (!pics) {
    console.log("No file selected");
    return null;
  }

  try {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "twitter_clone"); // تأكد من إنشائه في لوحة التحكم
    data.append("cloud_name", "dtdrbld4u");

    const res = await fetch("https://api.cloudinary.com/v1_1/dtdrbld4u/" + fileType + "/upload", {
      method: "post",
      body: data,
    });

    const fileData = await res.json();

    if (fileData.error) {
      console.error("Cloudinary error:", fileData.error.message);
      return null;
    }

    console.log("Uploaded URL:", fileData.url);
    return fileData.url;
  } catch (err) {
    console.error("Upload to Cloudinary failed:", err);
    return null;
  }
};
