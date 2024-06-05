const { GoogleGenerativeAI } = require("@google/generative-ai");

const Pet = require('../models/pet.model');
const Bag = require('../models/bag.model');

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const petPet = async (req, res) => {
	try {
		// add pet
		const pet = await Pet.create({
			userId: req.body.userId,
			name: req.body.name,
			exp: 0,
		});
		res.status(201).json(pet);
		console.log('[Pet] User ' + pet.userId + ' started to take care ' + pet.name);
	}
	catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const checkPet = async (req, res) => {
	try {
		// get userId in cookie
		
		// check pet
		const pet = await Pet.findOne({
			userId: req.params.userId
		});
		if (pet) {
			res.status(200).json(pet);
		}
	}
	catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const expUp = async (req, res) => {
	try {
		const userId = req.body.userId;
		// add exp
		if (req.body.foodRequire != -1) {
			const bag = await Bag.findOne({
				userId
			});
			if (bag) {
				const id = ['663e0d50adbede46c0bd88bb', '663e0da1adbede46c0bd88bd', '663e0d8fadbede46c0bd88bc'];
				const foodId = id[req.body.foodRequire];
				const food = bag.userItems.find(item => item.itemId == foodId);
				if (!food) {
					res.status(400).json({ message: 'Insufficient food' });
					return;
				}
				if (food.quantity == 0) {
					res.status(400).json({ message: 'Insufficient food' });
					return;
				}
				// update bag quantity
				await Bag.findOneAndUpdate(
					{ userId: req.body.userId },
					{ $inc: { "userItems.$[elem].quantity": -1 } },
					{ arrayFilters: [{ "elem.itemId": foodId }] }
				);
			} else {
				res.status(400).json({ message: 'Insufficient food' });
				return;
			}
		}
		const pet = await Pet.findOne({
			userId: req.body.userId
		});
		pet.exp += req.body.exp;
		await pet.save();
		res.status(200).json(pet);
	}
	catch (error) {
		res.status(500).json({ message: error.message });
	}
}

async function runChat(userInput, type) {
	try {
		// The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)
		const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

		const dogPrompt = 'Bạn đang đóng giả làm thú cưng của tôi, bạn là một chú chó thông minh và rất dễ thương, bạn có thể trả lời những câu hỏi đơn giản, những câu hỏi khó bạn không thể trả lời được và sẽ biểu hiện là bạn không hiểu. Sau đây là câu trò chuyện, hãy trả lời: ';
		const dogresponse = "Gâu! Gâu! Chào bạn! Mình tên là chó con, là một chú chó thông minh và rất dễ thương. Rất vui được làm quen với bạn!";
		const catPrompt = 'Bạn đang đóng giả làm thú cưng của tôi, bạn là một chú mèo thông minh và rất dễ thương, bạn có thể trả lời những câu hỏi đơn giản, những câu hỏi khó bạn không thể trả lời được và sẽ biểu hiện là bạn không hiểu. Sau đây là câu trò chuyện, hãy trả lời: ';
		const catresponse = "Mew! Mew! Chào bạn! Mình tên là mèo lười, là một chú chó thông minh và rất dễ thương. Rất vui được làm quen với bạn!";
		const mousePrompt = 'Bạn đang đóng giả làm thú cưng của tôi, bạn là một chú chuột thông minh và rất dễ thương, bạn có thể trả lời những câu hỏi đơn giản, những câu hỏi khó bạn không thể trả lời được và sẽ biểu hiện là bạn không hiểu. Sau đây là câu trò chuyện, hãy trả lời: ';
		const mouseresponse = "Chít! Chít! Chào bạn! Mình tên là Chinchilla, là một chú chuột thông minh và rất dễ thương. Rất vui được làm quen với bạn!";

		const defaultPrompt = {
			"Chó con": dogPrompt,
			"Mèo lười": catPrompt,
			"Chinchilla": mousePrompt
		
		};

		const defaultResponse = {
			"Chó con": dogresponse,
			"Mèo lười": catresponse,
			"Chinchilla": mouseresponse
		};



		const chat = model.startChat({
			history: [
				{
					role: "user",
					parts: [{ text: defaultPrompt[type] }],
				},
				{
					role: "model",
					parts: [{ text: defaultResponse[type] }],
				},
			],
			generationConfig: {
				maxOutputTokens: 100,
			},
		});

		const result = await chat.sendMessage(userInput);
		const response = await result.response;
		const text = response.text();
		return text;
	} catch (error) {
		if (error instanceof GoogleGenerativeAIResponseError) {
			const defaultResopnse = 'Uw?... uw?... không hiểu... ';
			return defaultResopnse;
		}
	}

}

const chatWithPet = async (req, res) => {
	try {
		const userInput = req.body?.userInput;
		const type = req.body?.type;
		if (!userInput) {
			return res.status(400).json({ error: 'Invalid request body' });
		}

		const response = await runChat(userInput, type);
		res.json({ response });
	} catch (error) {
		console.error('Error in chat endpoint:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}

module.exports = {
	petPet,
	checkPet,
	expUp,
	chatWithPet
};
