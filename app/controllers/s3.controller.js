var stream = require('stream');
 
const s3 = require('../config/s3.config.js');

exports.getSongs = (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	console.log("opa3")
	const s3Client = s3.s3Client;
	const params = s3.downloadParams;
	params.Key = "songData.json";

	s3Client.getObject(params)
		.createReadStream()
			.on('error', function(err){
				res.status(500).json({error:"Error -> " + err});
		}).pipe(res);
}
