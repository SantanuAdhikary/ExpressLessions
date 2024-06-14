const ErrorResponse = require("../middleware/ErrorResponse");
const authSchema = require("../model/authSchema");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    let user = {
      name: req.body.name,
      pass: req.body.pass,
    };

    let payload = await authSchema.create(user);

    let token = await payload.generateToken();
    res
      .status(201)
      .json({ message: "successfully registered", success: true, token });
  } catch (err) {
    console.log(err);
  }
};

//! with out error middleware 

// exports.login = async (req, res) => {
//   try {
//     const { name, pass } = await req.body;

//     if (!name || !pass) {
//       res
//         .status(401)
//         .json({ success: false, message: "both the fields should be present" });
//     } else {
//       let user = await authSchema.findOne({ name }).select("+pass");

//       if (!user) {
//         res.status(401).json({ success: false, message: "wrong user" });
//       } else {
//         //    const isMatch = await bcrypt.compare(pass,user.pass);

//         const isMatch = await user.comparePassword(pass);

//         if (!isMatch) {
//           res.status(401).json({ success: false, message: "wrong password" });
//         } else {
//           let token = await user.generateToken();
//           res
//             .status(200)
//             .json({ message: "successfully login", success: true, token });
//         }
//       }
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

//! with error handler middleware 

exports.login = async (req, res,next) => {
  try {
    const { name, pass } = await req.body;

    if (!name || !pass) {
      next(new ErrorResponse("both the field should be present",400))
    } else {
      let user = await authSchema.findOne({ name }).select("+pass");

      if (!user) {
        next(new ErrorResponse("wrong user",401))
      } else {
        //    const isMatch = await bcrypt.compare(pass,user.pass);

        const isMatch = await user.comparePassword(pass);

        if (!isMatch) {
            next(new ErrorResponse("wrong password",401))
        } else {
          let token = await user.generateToken();
          res
            .status(200)
            .json({ message: "successfully login", success: true, token });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
