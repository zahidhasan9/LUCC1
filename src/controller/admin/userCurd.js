
const User = require("../../models/user");

// Get all users
exports.getUsers = async (request, response) => {
    // Step -1 // Test API
    // response.send('Code for Interview');
    try{
        // finding something inside a model is time taking, so we need to add await
        const users = await User.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
exports.addUser = async (request, response) => {
    // retreive the info of user from frontend
    const user = request.body;
    console.log("inside")

    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a user by id
exports.getUserById = async (request, response) => {
    try{
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
// exports.editUser = async (request, response) => {
//     let user = await User.findById(request.params.id);
//     user = request.body;

//     const editUser = new User(user);
//     try{
//         await User.updateOne({_id: request.params.id}, editUser);
//         response.status(201).json(editUser);
//     } catch (error){
//         response.status(409).json({ message: error.message});     
//     }
// }



exports.editUser = async (req ,res) =>{
    await User.findById(req.params.id)
      .then(User => {
        
        User.activation_status = req.body.activation_status;
        
  
        User.save()
          .then(() => res.json('User updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  };

// deleting data of user from the database
exports.deleteUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}