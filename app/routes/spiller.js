var Spiller = require('../models/spiller');

module.exports = function(app, express)
{

	var spillerRouter = express.Router();

	// On routes that end in /spillere
	//-------------------------------------------------------
	spillerRouter.route('/spillere')
		//create a spiller
		.post(function(req, res)
		{
			var spiller 		= new Spiller();
			spiller.navn 		= req.body.navn;
			spiller.alder 		= req.body.alder;
			spiller.hold		= req.body.hold;

			spiller.save(function(err)
			{
				if(err) res.send(err);
				res.json({ message: 'Spiller created!'});
			});
		})
		.get(function(req, res)
		{
			Spiller.find(function(err, spillere)
			{
				if(err) res.send(err);

				// return the spillere
				res.json(spillere);
			});
		});

	// On routes that end in /spillere/spiller_id
	//-------------------------------------------------------
	spillerRouter.route('/spiller/:spiller_id')
		// find the spiller on the specified spillerid
		.get(function(req, res)
		{
			Spiller.findById(req.params.Spiller_id, function(err, spiller)
			{
				if(err) res.send(err);

				// return the spiller
				res.json(spiller);
			});
		})
		// update the spiller on the specified spillerId
		.put(function(req, res)
		{
			Spiller.findById(req.params.spiller_id, function(err, spiler)
			{
				if(err) res.send(err);

				if(req.body.navn) spiller.name = req.body.navn;
				if(req.body.alder) spiller.alder = req.body.alder;
				if(req.body.hold) spiller.hold = req.body.hold;

				// save the spiller
				spiller.save(function(err)
				{
					if(err) res.send(err);

					//return a message
					res.json({ message: 'The spiller has been updated'});
				});
			});
		})
		.delete(function(req, res)
		{
			Spiller.remove(
			{
				_id : req.params.spiller_id
			},
			function(err, spiller)
			{
				if(err) return res.send(err);
				res.json({ message: 'the spiller has been deleted'});
			});
		});

		return spillerRouter;
}