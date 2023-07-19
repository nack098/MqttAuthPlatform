import * as bcrypt from "bcrypt";

async function check() {
  const pw = "09122003";
  const hashByPw =
    "$2a$10$Tm4wPndXPm5bhXQzn85yNuz4qVcZ3zOKVRCXDrq3vfhOMLAnLHwgG";
  const bcryptHash =
    "$2b$10$1/nVczgYOYGb2bYWQue1.eQf7i9dGfZopGNu0jBpHH0WbB0WHSt9i";
  const res = await bcrypt.compare(pw, bcryptHash);
  console.log(res);
}

check();
