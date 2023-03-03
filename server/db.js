const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};

    try{
        mongoose.connect(process.env.DB, connectionParams);
		console.log("Connected successfully!");
    } catch(err){
        console.log(err);
		console.log("No connection!");
    }
}