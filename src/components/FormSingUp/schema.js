const { z } = require("zod");

const schemaSignUp = z.object({
  name: z.string().min(1, { message: "Field Name is Required" }),
  lastname: z.string().min(1, { message: "Field Lastname is Required" }),
  email: z.string().email({ message: "Invalid Email address" }),
  password: z
    .string({
      required_error: "Field Password is Required",
    })
    .min(6, { message: "min length 6 " }),
});

export default schemaSignUp;
