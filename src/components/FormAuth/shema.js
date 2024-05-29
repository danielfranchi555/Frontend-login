const { z } = require("zod");

const schemaSignUp = z.object({
  email: z.string().email({ message: "Invalid Email address" }),
  password: z
    .string({
      required_error: "Field Password is Required",
    })
    .min(6, { message: "min length 6 " }),
});

export default schemaSignUp;
