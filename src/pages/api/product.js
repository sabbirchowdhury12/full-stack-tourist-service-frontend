const { MongoClient, ObjectId, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://EmaJohnDbUser:O8ZQbYCT5asELa4J@cluster0.6jo974x.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const productsCollection = client
      .db("products_portal")
      .collection("products");

    if (req.method === "GET") {
      if (req.query.id) {
        const objectId = new ObjectId(req.query.id);
        const singleProduct = await productsCollection.findOne({
          _id: objectId,
        });
        res.send(singleProduct);
      } else {
        const products = await productsCollection.find({}).toArray();
        res.send(products);
      }
    }
  } finally {
  }
}

export default run;
