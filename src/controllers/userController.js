import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import userModel from '../models/userModel.js';

export const getAllUser = async (req, res)=>{
	try{
		const users = await userModel.find()
		res.status(200).json(users);
	} catch(error){
		res.status(500).json('Server error')
	}
}

export const getUser = async (req, res) =>{
		const id = req.params.id;
	try{
		const user = await userModel.findById(id)	
		if (!user){
			console.log("Not found")
			return res.status(404).json("Not Found")
		}
		res.status(200).json(user);
	} catch(error){
		res.status(500).json("Server error")
	}
}

export const createUser = async (req, res) => {
	const { profileFName, profileSName, profileEmail,
			profilePassword, profileDateOfBirth, profileGenre,
			profilePic, profileFrontPic, profileAlias,
			profileDetails, profileUbication } = req.body;

	try {
		if (!profileFName || !profileSName || !profileEmail || !profilePassword) {
			return res.status(400).json('Missing required fields');
		}

		const existingUser = await userModel.findOne({ profileEmail });
		if (existingUser) {
			return res.status(400).json('Email already exists');
		}

		const hashedPassword = await bcrypt.hash(profilePassword, 10);

		const user = await userModel.create({
			profileFName,
			profileSName,
			profileEmail,
			profilePassword: hashedPassword,
			profileDateOfBirth,
			profileGenre,
			profilePic,
			profileFrontPic,
			profileAlias,
			profileDetails,
			profileUbication
		});

		res.status(201).json(user);
	} catch (error) {
		console.error('Server error', error);
		res.status(500).json('Server error');
	}
};

export const updateUser = async (req, res) => {
	const { profileFName, profileSName, 
			profileEmail, profilePassword, 
			profileDateOfBirth, profileGenre,
			profilePic, profileFrontPic, 
			profileAlias, profileDetails, profileUbication 
			} = req.body;
	const userId = req.params.id;

	try {
		if (!profileFName || !profileSName || !profileEmail) {
			return res.status(400).json('Missing required fields');
		}
		//Simplificando codigo
		let updatedFields = {	profileFName, profileSName, 
								profileEmail, profileDateOfBirth, 
								profileGenre, profilePic, 
								profileFrontPic, profileAlias, 
								profileDetails, profileUbication };

		if (profilePassword) {
			const hashedPassword = await bcrypt.hash(profilePassword, 10);
			updatedFields.profilePassword = hashedPassword;
		}

		// Actualizar el usuario
		const updatedUser = await userModel.findByIdAndUpdate(userId, updatedFields, { new: true });

		if (!updatedUser) {
			return res.status(404).json('User not found');
		}

		res.status(200).json(updatedUser);
	} catch (error) {
		console.error('Server error', error);
		res.status(500).json('Server error');
	}
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User deleted successfully', user });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export default {getAllUser, getUser, createUser, updateUser, deleteUser}