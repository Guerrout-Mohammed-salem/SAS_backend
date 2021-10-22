import { isAdmin } from "./Auth";

var user = isAdmin();
console.log("user: ", user);
export { user };
