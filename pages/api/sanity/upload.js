import sanityClient from "@sanity/client";
import path from "path";
import { createReadStream } from "fs";
import nc from "next-connect";
import multer from "multer";
const client = sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATA_SET,
  useCdn: true,
  token: process.env.SANITY_AUTH_TOKEN
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc();

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({
  storage: storage,
});

let uploadFile = upload.single("file");
handler.use(uploadFile);
handler.post(async (req, res) => {
  try {
    const { _id } = req.body;
    const data = await client.assets
      .upload("image", createReadStream(req.file.path), {
        filename: path.basename(req.file.path),
      })
      .then((imageAsset) => {
        return client
          .patch(`${_id}`)
          .set({
            userImage: {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageAsset._id,
              },
            },
          })
          .commit();
      });
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
    console.log(error);
  }
});

export default handler;