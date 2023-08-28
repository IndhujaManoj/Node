
const userModel = require('./userModel');
const key = '123456789trytryrtyr';
const encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = async (userDetails) => {
    try {
        const userModelData = new userModel();

        userModelData.firstName = userDetails.firstName;
        userModelData.lastName = userDetails.lastName;
        userModelData.email = userDetails.email;
        userModelData.password = encryptor.encrypt(userDetails.password);

        await userModelData.save();
        return true;
    } catch (error) {
        return false;
    }
};

module.exports.loginuserDBService = async (employeeDetails) => {
    try {
        const result = await userModel.findOne({ email: employeeDetails.email });

        if (result) {
            const decrypted = encryptor.decrypt(result.password);
            if (decrypted === employeeDetails.password) {
                return { status: true, msg: "Employee Validated Successfully" };
            } else {
                throw { status: false, msg: "Employee Validation failed" };
            }
        } else {
            throw { status: false, msg: "Invalid Employee Details" };
        }
    } catch (error) {
        throw { status: false, msg: "Invalid Data" };
    }
};
