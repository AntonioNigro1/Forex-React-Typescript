import { login as UserLogin, register as UserRegister } from "../../controllers/UserController";

describe("UserLogin", () => {
  it("should resolve with with a token, user id and name", async () => {
    const req = { email: "toninigro@live.com", password: "010398" };
    const res = {
      status: 200,
      _id: "62fe55a52d34aedf5e11a44e",
      name: "Antonio Fontão Nigro",
    };
    const response = await UserLogin(req, "", () => {});
    expect(response).toEqual(res);
  });

  it("sould resolve with an error for a invalid user", async() => {
    const req = { email: "invalidData", password: "invalidData" };
    const res = {
      status: 409,
      error: "User not found, check your credencials"
    };

    const response = await UserLogin(req, "", ()=>{});
    expect(response).toEqual(res);

  })

});
