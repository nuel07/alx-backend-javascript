import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * function that handles users signup
 * @param{string} firstName
 * @param{string} lastName
 * @param{string} filename
 * @return{array} result
 */
const handleProfileSignup = async (
  firstName,
  lastName,
  fileName,
) => {
  const result = [];
  try {
    const user = await signUpUser(firstName, lastName);
    result.push({ status: 'fulfilled', value: user });
    await uploadPhoto(fileName);
  } catch (error) {
    result.push({
      status: 'rejected',
      value: error.toString(),
    });
  }
  return result;
};

export default handleProfileSignup;
