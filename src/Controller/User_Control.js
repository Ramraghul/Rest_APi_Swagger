const User = require('../Models/User');

//Checking 
function check(req, res) {
  try {
    return res.status(200).json({ message: "Welcome to new learn" })
  } catch (error) {
    return res.status(500).json({
      Message: "Server Issue",
      Error: error.message
    });
  }
}


//Get all data from database;
async function getAllUser(req, res) {
  try {
    const users = await User.findAll();
    return res.json({
      Message: 'Success',
      users: users
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Server Issue",
      Error: error.message
    });
  }
}


//Create New User;
async function createNewUser(req, res) {
  try {
    let data = req.body
    await User.create(data)
    return res.status(201).json({ 
      status:'Success'
      ,message: 'New User Successfully created' })
  } catch (error) {
    return res.status(500).json({
      Message: "Server Issue",
      Error: error.message
    });
  }
}



//Get user By id
async function findUserById(req, res) {
  try {
    let userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ user: user });
  } catch (error) {
    return res.status(500).json({
      message: 'Server Issue',
      error: error.message
    });
  }
}



//Update user data by id;
async function updateUserById(req, res) {
  try {
    const userId = req.params.id
    const findUser = await User.update(
      req.body
      , {
        where: { id: userId }
      }
    )
    if (findUser[0] === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({
      message: "User update successfully"
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Server Issue',
      error: error.message
    });
  }
}



//Get user data by name;
async function findUserDataByName(req, res) {
  try {
    const data = req.params.name;
    const findUserByName = await User.findOne({ where: { first_name: data } })
    if (!findUserByName) {
      return res.status(404).json({ message: 'Please try first name' });
    }
    return res.status(200).json({ first_name: findUserByName })
  } catch (error) {
    return res.status(500).json({
      message: 'Server Issue',
      error: error.message
    });
  }
}


//Inactive user data by id (Delete);
async function DeleteUserById(req, res) {
  try {
    let userId = req.params.id
    let detail = req.body
    let findUser = await User.findOne(
      {
        where: { id: userId }
      }
    )
    if (!findUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (detail.is_active === 'Off') {
      await User.update(
        { is_active: "Inactive" }
        , {
          where: { id: userId }
        }
      )
      return res.status(200).json({
        message: "User Deactivate successfully"
      })
    }
    if (detail.is_active === 'On') {
      await User.update(
        { is_active: "Active" }
        , {
          where: { id: userId }
        }
      )
      return res.status(200).json({
        message: "User Activate successfully"
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Server Issue',
      error: error.message
    });
  }
}




module.exports = {
  getAllUser,
  check,
  createNewUser,
  findUserById,
  updateUserById,
  findUserDataByName,
  DeleteUserById
};
