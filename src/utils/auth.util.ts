import bcrypt from "bcryptjs";

export const passwordEncript = async (password: string) => {
  const genSalt = await bcrypt.genSalt(5);
  return await bcrypt.hash(password, genSalt);
};
export const comparePassword = async (
  passwordDb: string,
  passwordReceived: string
) => {
  return await bcrypt.compare(passwordReceived, passwordDb);
};
