const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    passwordHash: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["SUPER_ADMIN", "CLUB_ADMIN", "STAFF", "COACH"],
      default: "CLUB_ADMIN",
    },
  },
  { timestamps: true } // adds createdAt, updatedAt
);

// 🔐 Pre-save: Hash password if modified
userSchema.pre("save", async function (next) {
  if (!this.isModified("passwordHash")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// 🔍 Password comparison method
userSchema.methods.comparePassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.passwordHash);
};

module.exports = mongoose.model("User", userSchema);
